import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { useEffect, useState } from 'react';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { confirmWithModal } from '../components/ConfirmModal';
import { EntryFieldProps } from '../components/EntryField';
import useNotifications from './useNotifications';
import useSchema, { Property, UseSchemaProps, UseSchemaReturn } from './useSchema';
import useSdk from './useSdk';

/* [markdown]
 * Hook for quick setup of forms that edit or create datamanager entries.
 * Knows about entry schema + handles save logic automatically.
 * Exposes internally used react-hook-form for custom template.
 * Also check out EntryModal which uses this hook.
 */

// TODO: add generic for values
// TODO: maybe rename entry or create extra prop for create with defaultValues...

export interface UseEntryFormProps extends Omit<UseSchemaProps, 'type'> {
  /**  if given, the form will be used to edit an existing entry, if not, a new entry will be created */
  entry?: Partial<EntryResource>;
  /**  called when the form is submitted after successful save */
  onSubmit?: (entry: Partial<EntryResource>, isUpdate?: boolean) => void;
  /**  massage form values to entry values */
  formToEntry?: (values: any, entry?: Partial<EntryResource>) => any | Promise<any>;
  /** massage entry values to form values */
  entryToForm?: (values: any, form?: any) => any | Promise<any>;
  /** custom default values */
  getDefaultValues?: (usedFields: [string, Property][], entry?: Partial<EntryResource>) => any;
  /** called when the form is canceled */
  onCancel?: () => void;
  /** called after the entry has been deleted */
  onDelete?: () => void;
  /** if true, the form will show you how to customize the form (see console) */
  dev?: boolean;
  /** additional props passed to useForm */
  formProps?: UseFormProps<any, any>;
}

export interface UseEntryFormReturn extends Omit<UseSchemaReturn, 'swrResponse'> {
  model: string | null;
  entry?: Partial<EntryResource>;
  onSubmit: (values: any) => void;
  onDelete?: () => void;
  onCancel: undefined | (() => void);
  dev: boolean;
  form: UseFormReturn<any, any>; // the react-hook-form form instance
  cancel: () => Promise<boolean>; // can be used to cancel the form from outside. if false is returned, the form will not be canceled (useful with for confirm dialogs)
  canSubmit: boolean; // true if the form can be submitted (e.g. to disable submit button)
  canDelete: boolean; // true if the form can have a delete function (need onDelete + entry)
  isDirty: boolean; // true if the form has been changed (e.g. to enable submit button)
  isSubmitting: boolean; // true if the form is currently submitting (e.g. to disable submit button)
  entryField: (field: string) => EntryFieldProps; // can be used to spread into an EntryField (see DefaultFormO)
}

function useEntryForm(props: UseEntryFormProps): UseEntryFormReturn {
  const { model, fields: fieldsProp, formProps, ...schemaProps } = props;
  const {
    entry,
    onSubmit: onSubmitProp,
    onCancel,
    onDelete,
    dev = false,
    getDefaultValues,
    formToEntry,
    entryToForm,
  } = props;
  const { api } = useSdk();
  const notifications = useNotifications();
  const [defaultValues, setDefaultValues] = useState();
  const { schema, usedFields, fields } = useSchema({
    model,
    type: entry?.id ? 'put' : 'post',
    fields: fieldsProp,
    ...schemaProps,
  });
  const form = useForm(formProps);
  const {
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting },
  } = form;

  const resetDefaultValues = () => {
    let _defaultValues =
      getDefaultValues?.(usedFields, entry) ||
      Object.fromEntries(
        usedFields?.map(([key, field]) => {
          const [type] = field.title.split('<');
          let value = entry?.[key] ?? field.default;
          switch (type) {
            case 'assets':
              value = value?.map((a) => a.assetID) || [];
              break;
            case 'asset':
              value = value?.assetID;
              break;
            case 'entry':
              value = value?.id;
              break;
            case 'entries':
              value = value?.map((a) => a.id) || [];
          }
          return [key, value];
        }),
      );
    if (entryToForm) {
      (async () => setDefaultValues(await entryToForm(_defaultValues, form)))();
    } else {
      setDefaultValues(_defaultValues);
    }
  };

  useEffect(() => {
    resetDefaultValues();
  }, [usedFields, entry]);

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  const onSubmit = handleSubmit(async (values) => {
    let savedEntry: Partial<EntryResource>;
    try {
      values = JSON.parse(JSON.stringify(values)); // remove all undefined values (needs to run first)
      values = (await formToEntry?.(values, entry)) || values;
      Object.keys(values).forEach((field) => {
        // cast string numbers
        if (schema?.[field]?.type === 'number') {
          values[field] = Number(values[field]);
        }
        if (entry) {
          entry[field] = values[field];
        }
      });
      if (entry?.id && entry.save) {
        savedEntry = await entry.save();
      } else {
        savedEntry = (await api!.createEntry(model, values)) as Partial<EntryResource>;
      }
      notifications.emit({
        type: 'success',
        title: 'Erfolgreich gespeichert.',
      });
      await onSubmitProp?.(savedEntry, !!entry?.id);
      resetDefaultValues();
    } catch (error: any) {
      console.error('Fehler beim Speichern', values, usedFields);
      console.dir(error);
      notifications.emit({
        type: 'error',
        title: 'Fehler beim Speichern',
        message: error?.message || 'Unbekannter Fehler',
      });
    }
  });
  const cancel = async () => {
    if (!isDirty || (await confirmWithModal('Änderungen verwerfen?', 'Die Änderungen gehen verloren.'))) {
      reset(defaultValues);
      onCancel?.();
      return true;
    }
    return false;
  };
  const canSubmit = !entry?.id || (isDirty && !isSubmitting);
  const canDelete = !!onDelete && !!entry?.id;
  const entryField = (field: string) => ({ field, schema: schema?.[field], form, entry, entryField });
  return {
    model,
    schema,
    entry,
    usedFields,
    form,
    onCancel,
    cancel,
    canSubmit,
    canDelete,
    isDirty,
    isSubmitting,
    onSubmit,
    onDelete,
    fields,
    entryField,
    dev,
  };
}

export default useEntryForm;

// returns obj where values for fields are set to null if they are empty strings
// this is useful, because react-hook-form will set registered inputs to empty strings by default
// in many cases empty strings will clash with datamanager field validation
export function nullifyEmpty(fields, obj) {
  return fields.reduce((o, key) => ({ ...o, [key]: obj[key] === '' ? null : obj[key] }), {});
}

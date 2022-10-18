import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { UseFormProps, UseFormReturn } from 'react-hook-form';
import { EntryFieldProps } from '../components/EntryField';
import { Property, UseSchemaProps, UseSchemaReturn } from './useSchema';
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
    form: UseFormReturn<any, any>;
    cancel: () => Promise<boolean>;
    canSubmit: boolean;
    canDelete: boolean;
    isDirty: boolean;
    isSubmitting: boolean;
    entryField: (field: string) => EntryFieldProps;
}
declare function useEntryForm(props: UseEntryFormProps): UseEntryFormReturn;
export default useEntryForm;
export declare function nullifyEmpty(fields: any, obj: any): any;

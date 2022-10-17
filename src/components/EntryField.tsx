import Editor from '@monaco-editor/react';
import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { Controller, RegisterOptions, UseFormReturn } from 'react-hook-form';
import { Property } from '../hooks/useSchema';
import { AssetPickerInput } from './AssetPickerInput';
import { DateInput } from './CalendarInput';
import DevNote from './DevNote';
import EntriesChecker from './EntriesChecker';
import EntrySelect from './EntrySelect';
import Input from './Input';

export declare type EntryFieldProps = {
  /** the name of the field in the model */
  field: string;
  /** react-hook-form instance. */
  form: UseFormReturn<any, any>;
  /** model schema.  */
  schema: Property | undefined;
  /** the entry that holds the value. */
  entry?: Partial<EntryResource>;
  /** rules for registering the field in the form (react-hook-form RegisterOptions)  */
  rules?: Omit<RegisterOptions<EntryResource, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  /** field placeholder */
  placeholder?: string;
  entryField?: (field: string) => EntryFieldProps;
};

export const tokenizeType = (type: string) => type?.split('<').map((s, i) => (!i ? s : s.slice(0, -1))) || [];

/** Renders the appropriate input for the given entry field. Expects EntryFieldProps as returned by useEntryForm entryField  */
function EntryField(props: EntryFieldProps) {
  const { field, schema, form, rules, placeholder = '', entry } = props;
  const [type, rel] = schema?.title.split('<') || [];
  let group;
  const readOnly = entry?.id && schema?.readOnly;
  const register = () => form.register(field, rules);
  switch (type) {
    case 'text':
      return <Input type="text" placeholder={placeholder} {...register()} readOnly={readOnly} />;
    case 'number':
      return <Input type="number" {...register()} readOnly={readOnly} />;
    case 'decimal':
      return <Input type="number" {...register()} readOnly={readOnly} />;
    case 'datetime':
      return <DateInput name={field} control={form.control} rules={rules} />; // placeholder, rules
    case 'url':
      return <Input type="url" {...register()} readOnly={readOnly} />;
    case 'boolean':
      return <Input type="checkbox" {...register()} readOnly={readOnly} />;
    case 'formattedText':
      return <Input.Textarea {...register()} readOnly={readOnly} rows={3} />;
    case 'entry':
      return <EntrySelect {...props} />;
    case 'entries':
      return <EntriesChecker {...props} />;
    case 'assets':
      group = rel?.split(':')[1].slice(0, -1);
      return <AssetPickerInput name={field} control={form.control} group={group} />;
    case 'asset':
      group = rel?.split(':')[1].slice(0, -1);
      return <AssetPickerInput solo name={field} control={form.control} group={group} />;
    case 'json':
      // return <JSONInputController name={field} control={form.control} />;
      return (
        <Controller
          control={form.control}
          name={field}
          render={({ field }) => (
            <Editor
              className="h-96"
              defaultLanguage="json"
              value={JSON.stringify(field.value, null, 2)}
              onChange={(e: any) => field.onChange(JSON.parse(e))}
              theme={localStorage.getItem('theme') === 'dark' ? 'vs-dark' : 'vs-light'}
              options={{
                wordWrap: 'on',
                autoIndent: 'full',
                formatOnPaste: true,
                autoClosingBrackets: 'always',
                automaticLayout: true,
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                formatOnType: true,
              }}
            />
          )}
        />
      );
    case 'date':
      return <DateInput name={field} control={form.control} />;
    case undefined:
      return null;
    default:
      return <DevNote>Field type &quot;{schema?.title}&quot; not implemented!</DevNote>;
  }
}

export default EntryField;

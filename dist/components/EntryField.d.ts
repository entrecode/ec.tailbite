import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import { Property } from '../hooks/useSchema';
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
export declare const tokenizeType: (type: string) => string[];
/** Renders the appropriate input for the given entry field. Expects EntryFieldProps as returned by useEntryForm entryField  */
declare function EntryField(props: EntryFieldProps): JSX.Element | null;
export default EntryField;

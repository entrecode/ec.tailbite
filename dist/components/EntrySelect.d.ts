import { filterOptions } from 'ec.sdk/lib/resources/ListResource';
import { Property } from '../hooks/useSchema';
import { EntryFieldProps } from './EntryField';
import { SelectInputProps } from './SelectInput';
import { SelectItem } from './SimpleSelect';
export interface EntrySelectProps extends Omit<EntryFieldProps, 'schema'>, Pick<SelectInputProps, 'renderPlaceholder'> {
    /** filterOptions to pass to useEntryList */
    filterOptions?: filterOptions;
    /** which property is used to display each entry, defaults to _entryTitle  */
    labelProperty?: string;
    /** If given, the items will be rendered above the entryList */
    staticItems?: SelectItem<string>[];
    /** The model to load entries from */
    model?: string;
    /** If no schema is given, make sure to pass model name instead */
    schema?: Property;
}
/** SimpleSelect with entries inside. For use with useEntryForm / EntryForm. Expects props generated with `entryField`  */
declare function EntrySelect(props: EntrySelectProps): JSX.Element;
export default EntrySelect;

import { UseEntryListProps } from '../hooks/useEntryList';
import { EntryFieldProps } from './EntryField';
export interface EntriesCheckerProps extends EntryFieldProps, Omit<UseEntryListProps, 'model'> {
    labelProperty?: string;
}
/** Checkboxes to select entries from a model, expects entryfield as returned from EntryForm.  */
declare function EntriesChecker(props: EntriesCheckerProps): JSX.Element;
export default EntriesChecker;

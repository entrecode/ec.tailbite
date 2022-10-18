import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import React from 'react';
import { UseEntryListProps } from '../hooks/useEntryList';
import { Property } from '../hooks/useSchema';
import { EntryFieldProps } from './EntryField';
export interface EntriesDropdownProps extends Omit<EntryFieldProps, 'schema'>, Omit<UseEntryListProps, 'model'> {
    labelProperty?: string;
    model?: string;
    renderSelectedLabel?: (value: string[], items: EntryResource[]) => React.ReactNode;
    schema?: Property;
}
/** Dropdown to select entries from a model, expects entryfield as returned from EntryForm.  */
declare function EntriesDropdown(props: EntriesDropdownProps): JSX.Element;
export default EntriesDropdown;

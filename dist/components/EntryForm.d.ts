import React from 'react';
import { UseEntryFormProps, UseEntryFormReturn } from '../hooks/useEntryForm';
export interface EntryFormProps extends Omit<UseEntryFormProps, 'onCancel'> {
    children?: (entryForm: UseEntryFormReturn) => React.ReactElement;
}
declare function EntryForm(props: EntryFormProps & {
    hideButtons?: boolean;
}): JSX.Element;
export default EntryForm;

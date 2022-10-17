import React from 'react';
import useEntryForm, { UseEntryFormProps, UseEntryFormReturn } from '../hooks/useEntryForm';
import DefaultEntryForm from './DefaultEntryForm';

export interface EntryFormProps extends Omit<UseEntryFormProps, 'onCancel'> {
  children?: (entryForm: UseEntryFormReturn) => React.ReactElement;
}

function EntryForm(props: EntryFormProps & { hideButtons?: boolean }) {
  const { children, hideButtons, ...rest } = props;
  const entryForm = useEntryForm(rest);
  return typeof children === 'function' ? (
    children(entryForm)
  ) : (
    <DefaultEntryForm {...entryForm} hideButtons={hideButtons} />
  );
}

export default EntryForm;

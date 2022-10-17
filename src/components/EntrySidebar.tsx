import React from 'react';
import useEntryForm from '../hooks/useEntryForm';
import DefaultEntryForm from './DefaultEntryForm';
import { EntryModalProps } from './EntryModal';
import Sidebar from './Sidebar';

/** useEntryForm + Sidebar. Can also be passed all props of useEntryForm */

function EntrySidebar(props: EntryModalProps & { className?: string }) {
  const { onSubmit, onDelete, onClose, open, disableClose, heading, children, ...entryFormProps } = props;
  const { fields, entry } = props;
  const entryForm = useEntryForm({
    entry,
    fields,
    onDelete: onDelete
      ? async () => {
          await onDelete();
          onClose?.();
        }
      : undefined,
    onSubmit: async (entry, isUpdate) => {
      await onSubmit?.(entry, isUpdate);
      onClose?.();
    },
    onCancel: onClose,
    ...entryFormProps,
  });
  return (
    <Sidebar
      open={open}
      className={props.className}
      onClose={async () => !disableClose && (await entryForm.cancel()) && onClose?.()}
    >
      <Sidebar.Head>
        <Sidebar.Heading>{heading || ''}</Sidebar.Heading>
        <Sidebar.X />
      </Sidebar.Head>
      <Sidebar.Body>
        {typeof children === 'function' ? children(entryForm) : <DefaultEntryForm {...entryForm} />}
      </Sidebar.Body>
    </Sidebar>
  );
}

// See EntryModal for examples => it's exactly the same markup, just replace "EntryModal" with "EntrySidebar"

export default EntrySidebar;

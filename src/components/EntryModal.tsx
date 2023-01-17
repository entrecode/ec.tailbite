import React from 'react';
import useEntryForm, { UseEntryFormProps, UseEntryFormReturn } from '../hooks/useEntryForm';
import Button from './Button';
import DefaultEntryForm from './DefaultEntryForm';
import EntryField from './EntryField';
import Form from './Form';
import LocalLoader from './LocalLoader';
import Modal from './Modal';

export interface EntryModalProps extends Omit<UseEntryFormProps, 'onCancel'> {
  /** Callback after the form was submitted */
  onSubmit: (entry: any, isUpdate?: boolean) => Promise<any> | void;
  /** Callback after the entry was deleted */
  onDelete?: () => Promise<any> | void; // if defined, delete button will be shown
  /** Callback when the modal is closed */
  onClose?: () => void;
  /** controls the open state from outside */
  open: boolean;
  /** if true, click outside and esc will not close the modal */
  disableClose?: boolean;
  /** heading of the modal */
  heading?: string;
  /** children can be a function that receives the entryForm as argument. if not, DefaultEntryForm will be used */
  children?: (entryForm: UseEntryFormReturn) => React.ReactNode;
}

/** useEntryForm + Modal. Can also be passed all props of useEntryForm */

function EntryModal(props: EntryModalProps) {
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
    <Modal
      open={open}
      onClose={async () => !disableClose && (await entryForm.cancel()) && onClose?.()}
      className="min-w-full sm:min-w-[640px] max-w-[900px]"
    >
      {heading && <h3 className="text-2xl">{heading}</h3>}
      {typeof children === 'function' ? children(entryForm) : <DefaultEntryForm {...entryForm} />}
    </Modal>
  );
}

const addonFields = {
  title: { label: 'Titel' },
  description: { label: 'Beschreibung' },
  terms: { label: 'Vertragsbedingungen' },
  additionalTerminalTerms: { label: 'Zusätzliche Vertragsbedingungen am Terminal' },
  images: { label: 'Bilder' },
  active: { label: 'Im Mitgliederbereich unter "Meine Addons" buchbar' },
  upselling: { label: 'Nach Aktivierung der Mitgliedschaft als Upselling buchbar' },
};

/* [markdown]
 * this is the most simple example:
 */
export function EntryModalExample({ entry }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <EntryModal
        heading="Addon bearbeiten"
        model="addon_config"
        fields={addonFields}
        entry={entry}
        open={open}
        onSubmit={() => {
          // mutate() // toggle reload
        }}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

/* [markdown]
 * this example uses children render prop to display a custom form
 */

export function EntryModalExample2({ entry }) {
  const [open, setOpen] = React.useState(false);
  return (
    <EntryModal
      heading="Addon bearbeiten"
      model="addon_config"
      fields={addonFields}
      entry={entry}
      open={open}
      onSubmit={() => {
        // mutate() // reload list
      }}
      onClose={() => setOpen(false)}
    >
      {({ form, usedFields, canSubmit, onSubmit, cancel }) => {
        return (
          <Form>
            {usedFields.map(([field, fieldSchema], i) => (
              <Form.Item key={field} $first={!i}>
                <Form.Item.Label>{field}</Form.Item.Label>
                <Form.Item.Body>
                  <EntryField field={field} form={form} schema={fieldSchema} />
                </Form.Item.Body>
              </Form.Item>
            ))}
            <Modal.Buttons>
              <Button $empty onClick={() => (cancel as any)() && setOpen(false)}>
                Abbrechen
              </Button>
              <Button $primary={canSubmit} $disabled={!canSubmit} onClick={onSubmit}>
                Speichern {form.formState.isSubmitting && <LocalLoader />}
              </Button>
            </Modal.Buttons>
          </Form>
        );
      }}
    </EntryModal>
  );
}

// this example implements an entry modal without the EntryModal component, using just useEntryForm + Modal
export function CustomEntryModalExample({ entry }) {
  const [open, setOpen] = React.useState(false);
  const entryForm = useEntryForm({
    model: 'addon_config',
    fields: addonFields,
    entry,
    onSubmit: async () => {
      // await mutate(); // toggle list reload
      setOpen(false);
    },
    onCancel: () => setOpen(false),
  });
  return (
    <Modal
      open={open}
      onClose={() => {
        entryForm.cancel();
        setOpen(false);
      }}
    >
      <h3 className="text-2xl">Addon bearbeiten</h3>
      <DefaultEntryForm {...entryForm} />
    </Modal>
  );
}

export default EntryModal;

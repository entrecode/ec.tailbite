import React, { Fragment, useEffect, useState } from 'react';
import { UseEntryFormReturn } from '../hooks/useEntryForm';
import { classNames } from '../util/classNames';
import Button from './Button';
import ConfirmDelete from './ConfirmDelete';
import EntryField from './EntryField';
import Form from './Form';
import Ink from './Ink';
import LocalLoader from './LocalLoader';

// TODO: storybook?

function DefaultEntryForm(props: UseEntryFormReturn & { hideButtons?: boolean }) {
  const { dev, usedFields, fields, entryField, hideButtons } = props;
  useEffect(() => {
    if (dev && usedFields?.length) logSource(props);
  }, [dev, usedFields?.length]);
  return (
    <>
      <Form>
        <DefaultEntryFormItems {...props} />
        {!hideButtons && <DefaultEntryFormButtons {...props} />}
      </Form>
    </>
  );
}

export default DefaultEntryForm;

export function DefaultEntryFormItems(props: UseEntryFormReturn) {
  const { usedFields, fields, entryField } = props;

  return (
    <>
      {usedFields.map(([field], i) => (
        <Fragment key={i}>
          {fields?.[field]?.renderItem?.(entryField(field)) || (
            <Form.Item key={field} $first={!i}>
              <Form.Item.Label>{fields?.[field]?.label || field}</Form.Item.Label>
              <Form.Item.Body>
                {fields?.[field]?.render?.(entryField(field)) || <EntryField {...entryField(field)} />}
              </Form.Item.Body>
            </Form.Item>
          )}
        </Fragment>
      ))}
    </>
  );
}

export function DefaultEntryFormButtons(props: UseEntryFormReturn) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const { canDelete, canSubmit, isSubmitting, onSubmit, cancel, onDelete, entry } = props;
  return (
    <>
      <div className={classNames('flex', canDelete ? 'justify-between' : 'justify-end')}>
        {canDelete && (
          <Button $secondary onClick={() => setDeleteOpen(true)}>
            <Ink.Error>Löschen</Ink.Error>
          </Button>
        )}
        <div className="flex space-x-2">
          <Button $secondary onClick={() => cancel()}>
            Abbrechen
          </Button>
          <Button $primary={canSubmit} $disabled={!canSubmit} onClick={onSubmit}>
            Speichern {isSubmitting && <LocalLoader />}
          </Button>
        </div>
      </div>
      <ConfirmDelete
        title="Wirklich löschen?"
        deleteLabel="Löschen"
        description="Löschen kann nicht rückgängig gemacht werden."
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={async () => {
          await (entry as any).delete();
          setDeleteOpen(false);
          onDelete?.();
        }}
      />
    </>
  );
}

function logSource(props: UseEntryFormReturn) {
  const { usedFields, fields, model } = props;
  const componentName = model?.charAt(0).toUpperCase() + (model || '').slice(1) + 'Form';
  const src = `// if you want to fully customize the form, copy the following code and paste it into src/react/routes/${componentName}.tsx
import React from 'react';
import Button from '../components/Button';
import EntryField from '../components/EntryField';
import Form from '../components/Form';
import LocalLoader from '../components/LocalLoader';
import useEntryForm from '../hooks/useEntryForm';

export default function ${componentName}() {
  const { form, entryField, canSubmit, onSubmit, cancel } = useEntryForm({ model: '${model}' });
  // form is a react-hook-form instance
  return (
    <Form>${usedFields
      .map(
        ([field], i) => `
      <Form.Item${!i ? ' $first' : ''}>
        <Form.Item.Label>${fields?.[field]?.label || field}</Form.Item.Label>
        <Form.Item.Body>
          <EntryField {...entryField('${field}')} />
        </Form.Item.Body>
      </Form.Item>`,
      )
      .join('')}
      <div className="flex justify-end space-x-2">
        <Button $secondary onClick={() => cancel()}>
          Abbrechen
        </Button>
        <Button $primary={canSubmit} $disabled={!canSubmit} onClick={onSubmit}>
          Speichern {form.formState.isSubmitting && <LocalLoader />}
        </Button>
      </div>
    </Form>
  );
}`;
  console.log(src);
}

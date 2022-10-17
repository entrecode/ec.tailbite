import React from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import ConfirmDelete from './ConfirmDelete';
import { FieldErrorMessage } from './FieldErrorMessage';
import Form from './Form';
import SelectInput from './SelectInput';
import { ToggleInput } from './Toggle';
import { useAddons } from '../hooks/useAppsite';
import useBackends from '../hooks/useBackends';
import Ink from './Ink';

function UpsellingForm({ purchases, onSubmit, onDelete, defaultValues }: any) {
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const { backends } = useBackends();
  const { data: addons } = useAddons();
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<UpsellingEntry>({
    defaultValues: { type: 'hector', ...(defaultValues || {}) },
    mode: 'onChange',
  });
  const canSubmit = !isSubmitting && isValid && isDirty;
  const type = watch('type');
  return (
    <>
      <Form>
        <Form.Item $first>
          <Form.Item.Label htmlFor="title">Titel</Form.Item.Label>
          <Form.Item.Body>
            <input className={Form.Item.text} type="text" {...register('title', { required: 'Pflichtfeld' })} />
            <FieldErrorMessage errors={errors} name="title" />
          </Form.Item.Body>
        </Form.Item>
        <Form.Item>
          <Form.Item.Label htmlFor="bookable">Buchbar</Form.Item.Label>
          <Form.Item.Body>
            <ToggleInput
              control={control}
              rules={{
                validate: (value) => {
                  if (
                    value &&
                    purchases?.find(
                      (purchase) => purchase.bookable && (!defaultValues.id || defaultValues.id !== purchase.id),
                    )
                  ) {
                    return 'Es gibt bereits eine buchbare Option!';
                  }
                  return true;
                },
              }}
              name="bookable"
            />
            <div className="mb-2" />
            <FieldErrorMessage errors={errors} name="bookable" />
          </Form.Item.Body>
        </Form.Item>
        <Form.Item>
          <Form.Item.Label htmlFor="title">Typ</Form.Item.Label>
          <Form.Item.Body>
            <SelectInput
              placeholder="Upselling-Typ wählen"
              items={[
                { value: 'inapp', label: 'In-App Purchase' },
                { value: 'hector', label: 'Hector Abo' },
              ]}
              control={control}
              name="type"
              rules={{
                required: 'Pflichtfeld',
              }}
            />
            <FieldErrorMessage errors={errors} name="type" />
          </Form.Item.Body>
        </Form.Item>

        {type === 'hector' && addons && backends && (
          <Form.Item>
            <Form.Item.Label className="break-word">
              Aboauswahl
              <br />
              <Ink.Light>Bitte wähle für jedes Backend ein Abo aus</Ink.Light>
            </Form.Item.Label>
            <Form.Item.Body>
              {Object.entries(backends).map(([backendId, backendLabel]) => (
                <Form.Item key={backendLabel} $dense $first className="mb-4">
                  <Form.Item.Label htmlFor="title">{backendLabel}</Form.Item.Label>
                  <Form.Item.Body>
                    <SelectInput
                      placeholder="Abo wählen"
                      items={addons
                        .filter((addon) => addon.backendId === backendId)
                        .map(({ name, id }) => ({ label: name, value: id }))}
                      control={control}
                      name={`config.${backendId}`}
                      rules={{
                        required: 'Pflichtfeld',
                        shouldUnregister: false,
                      }}
                    />
                    <FieldErrorMessage errors={errors} name={`config.${backendId}`} />
                  </Form.Item.Body>
                </Form.Item>
              ))}
            </Form.Item.Body>
          </Form.Item>
        )}
        {type === 'inapp' && (
          <Form.Item>
            <Form.Item.Label>App Config</Form.Item.Label>
            <Form.Item.Body>
              <Form.Item $dense $first>
                <Form.Item.Label htmlFor="title">iOS</Form.Item.Label>
                <Form.Item.Body>
                  <input
                    className={Form.Item.text}
                    type="text"
                    {...register('config.ios', {
                      required: 'Pflichtfeld',
                      shouldUnregister: false,
                    })}
                    placeholder="iOS Product ID"
                  />
                  <FieldErrorMessage errors={errors} name="config.ios" />
                </Form.Item.Body>
              </Form.Item>
              <Form.Item $dense>
                <Form.Item.Label htmlFor="title">Android</Form.Item.Label>
                <Form.Item.Body>
                  <input
                    className={Form.Item.text}
                    type="text"
                    {...register('config.android', {
                      required: 'Pflichtfeld',
                      shouldUnregister: false,
                    })}
                    placeholder="Android Product ID"
                  />
                  <FieldErrorMessage errors={errors} name="config.android" />
                </Form.Item.Body>
              </Form.Item>
            </Form.Item.Body>
          </Form.Item>
        )}
        <div className="flex justify-between">
          {onDelete && (
            <Button $secondary onClick={() => setDeleteOpen(true)}>
              <Ink.Error>Löschen</Ink.Error>
            </Button>
          )}
          <Button $primary={canSubmit} $secondary={!canSubmit} onClick={handleSubmit(onSubmit)}>
            Speichern
          </Button>
        </div>
      </Form>
      {onDelete && (
        <ConfirmDelete
          title="Wirklich löschen?"
          deleteLabel="Löschen"
          description="Soll der eintrag wirklich gelöscht werden?"
          open={deleteOpen}
          onClose={() => setDeleteOpen(false)}
          onDelete={async () => {
            onDelete();
            setDeleteOpen(false);
          }}
        />
      )}
    </>
  );
}

export default UpsellingForm;

declare interface InAppConfig {
  ios: string;
  android: string;
}

declare interface HectorConfig {
  [backendId: string]: string;
}

export declare interface UpsellingEntry {
  id: string;
  module: string;
  type: 'inapp' | 'hector';
  title: string;
  textConfig: any;
  config: InAppConfig | HectorConfig;
  save: any;
  del: any;
  bookable: boolean;
}

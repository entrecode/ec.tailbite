import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSettings from '../hooks/useSettings';
import Button from './Button';
import Form from './Form';
import { ToggleInput } from './Toggle';

function SecaSettingsForm({ prop, onSubmit, onReset }) {
  const { data: settings } = useSettings();
  const {
    reset,
    handleSubmit,
    control,
    formState: { isDirty },
  } = useForm();
  const [backend, clubID] = prop.split('$');
  let type = 'global';
  if (backend && backend !== 'global') {
    type = clubID ? 'club' : 'backend';
  }
  const isSaved = prop === 'global' || settings.moduleSettings.seca.enabled[prop] !== undefined;

  useEffect(() => {
    if (settings) {
      if (!settings.moduleSettings.seca.enabled) {
        settings.moduleSettings.seca.enabled = {
          global: settings?.moduleSettings?.visibility?.seca || settings?.moduleSettings?.visibilityApp?.seca,
        };
      }
      const [backend] = prop.split('$');
      let enabled = false;

      if (settings.moduleSettings.seca.enabled[prop] !== undefined) {
        enabled = settings.moduleSettings.seca.enabled[prop];
      } else if (settings.moduleSettings.seca.enabled[backend] !== undefined) {
        enabled = settings.moduleSettings.seca.enabled[backend];
      } else {
        enabled = settings.moduleSettings.seca.enabled.global;
      }

      reset({ enabled });
    }
  }, [settings]);

  return (
    <Form>
      <Form.Item $dense $first>
        <Form.Item.Body>
          <ToggleInput
            control={control}
            name="enabled"
            label="Modul aktiv"
            secondaryLabel="Wird diese Option aktiviert, wird dem Mitglied die SECA Körperanalyse angeboten."
          />
        </Form.Item.Body>
      </Form.Item>
      <div className="flex justify-end space-x-2">
        {prop !== 'global' && isSaved && (
          <Button $secondary onClick={onReset}>
            Zurücksetzen
          </Button>
        )}
        <Button $primary onClick={handleSubmit(onSubmit)} $disabled={isSaved && !isDirty}>
          {type !== 'global' && !isSaved ? 'Einstellung hinzufügen' : 'Speichern'}
        </Button>
      </div>
    </Form>
  );
}

export default SecaSettingsForm;

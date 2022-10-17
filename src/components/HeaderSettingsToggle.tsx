import { ComputerDesktopIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import delve from 'dlv';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useFeedback from '../hooks/useFeedback';
import useSettings from '../hooks/useSettings';
import Button from './Button';

export default function HeaderSettingsToggle({ type, depends }: { type: string; depends?: string }) {
  const { data: settings, mutate } = useSettings();
  const {
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { isValidating, isDirty },
  } = useForm();

  useEffect(() => {
    reset({ ...settings });
  }, [settings]);
  const moduleSettings = watch('moduleSettings');

  const { withFeedback, pending } = useFeedback();

  const showPageLoader = pending || !settings || isValidating;
  const canSubmit = !showPageLoader && !isValidating && isDirty;

  const submit = (data) => {
    withFeedback(
      async () => {
        const newModuleSettings = {
          visibility: data.moduleSettings.visibility,
          visibilityApp: data.moduleSettings.visibilityApp,
        };

        Object.assign(settings.moduleSettings, newModuleSettings);
        await settings.save(true);
        mutate();
      },
      { success: 'Einstellungen gespeichert', error: 'Fehler beim Speichern' },
    );
  };

  function getValue(path): any {
    path = path.split('.').slice(1).join('.');
    return delve(moduleSettings, path);
  }

  function handleChange(path) {
    return () => {
      setValue(path, !getValue(path), { shouldDirty: true });
      submit(watch());
    };
  }

  function getChange(entry) {
    return getValue(entry) ? 'text-blue-500' : 'text-slate-400';
  }

  return (
    <div className="ml-2 gap-2 inline-block text-sm">
      <Button.Action
        onClick={handleChange('moduleSettings.visibility.' + type)}
        $disabled={depends ? !watch('moduleSettings.visibility.' + depends) : false}
        tooltip="für Web aktiv"
        placement="bottom"
      >
        <ComputerDesktopIcon className={`w-5 h-5 ${getChange('moduleSettings.visibility.' + type)}`} />
      </Button.Action>
      <Button.Action
        onClick={handleChange('moduleSettings.visibilityApp.' + type)}
        $disabled={depends ? !watch('moduleSettings.visibilityApp.' + depends) : false}
        tooltip="für App aktiv"
        placement="bottom"
      >
        <DevicePhoneMobileIcon className={`w-5 h-5 ${getChange('moduleSettings.visibilityApp.' + type)}`} />
      </Button.Action>
    </div>
  );
}

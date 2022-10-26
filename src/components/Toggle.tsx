import { Switch } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { classNames } from '../util/classNames';

declare interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  secondaryLabel?: string;
}

export default function Toggle(props: ToggleProps) {
  const { label, secondaryLabel, onChange, value } = props;
  const [enabled, setEnabled] = useState(false);

  const handleChange = (checked) => {
    setEnabled(checked);
    onChange?.(checked);
  };
  useEffect(() => {
    setEnabled(value);
  }, [value]);
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={handleChange}
        className={classNames(
          enabled ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-500',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
          )}
        />
      </Switch>
      {!!(label || secondaryLabel) && (
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-gray-900 dark:text-white">{label}</span>
          {!!secondaryLabel && (
            <>
              <br />
              <span className="text-xs text-gray-500 dark:text-white-500">{secondaryLabel}</span>
            </>
          )}
        </Switch.Label>
      )}
    </Switch.Group>
  );
}

declare interface ToggleInputProps extends Omit<ToggleProps, 'value' | 'onChange'> {
  control: any;
  name: string;
  defaultValue?: boolean;
  rules?: any;
}

export function ToggleInput(props: ToggleInputProps) {
  const { control, label, secondaryLabel, name, defaultValue, rules } = props;
  return (
    <Controller
      render={({ field }) => (
        <Toggle label={label} secondaryLabel={secondaryLabel} value={field.value} onChange={field.onChange} />
      )}
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
    />
  );
}

export const ToggleExample = () => {
  const [checked, setChecked] = useState(false);
  return <Toggle label="Hallo" value={checked} onChange={setChecked} />;
};

import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { classNames } from '../util/classNames';
import MediumEditor from './MediumEditor';

export default function FormattedInput({
  value,
  onChange,
  options = {
    toolbar: {
      buttons: ['bold', 'italic', 'underline', 'h1', 'h2', 'h3'],
    },
  },
  placeholder = 'Dein Text…',
  className = undefined,
}: {
  value: string;
  onChange: (value: string) => void;
  options?: any;
  placeholder?: string;
  className?: string;
}) {
  const editorOptions = useMemo(
    () => ({
      ...options,
      placeholder: {
        text: placeholder,
        hideOnClick: true,
      },
    }),
    [options, placeholder],
  );
  return (
    <div>
      <MediumEditor
        value={value}
        onChange={onChange}
        options={editorOptions}
        className={classNames(
          `block w-full shadow-sm border border-gray-300 dark:border-gray-500 rounded-md 
        focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 p-2`,
          className,
        )}
      />
    </div>
  );
}

// for use with react-hook-form
export function FormattedInputController(props) {
  const { control, name, rules, ...rest } = props;
  return (
    <Controller
      render={({ field }) => (
        <FormattedInput
          {...rest}
          value={field.value}
          onChange={(value) => {
            if (value === '<p><br></p>') {
              value = '';
              // above value is the empty value...
              // if the field was already empty, e.g. pressing shift will dirty the form for no reason
              // also, if the field value gets deleted again, we want to be clean again
            }
            field.onChange(value);
          }}
        />
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

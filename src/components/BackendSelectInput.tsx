import React from 'react';
import { Controller } from 'react-hook-form';
import BackendSelect from './BackendSelect';

// TODO: storybook

function BackendSelectInput(props) {
  const { control, rules, name, ...rest } = props;
  return (
    <Controller
      render={({ field }) => <BackendSelect {...rest} value={field.value} onChange={field.onChange} />}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export default BackendSelectInput;

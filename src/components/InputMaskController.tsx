import React from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import InputMask from 'react-input-mask';
import Input from './Input';

export interface InputMaskControllerProps extends Omit<ControllerProps<any, any>, 'render'> {
  mask: string;
  children?: (inputProps: any) => React.ReactNode;
  placeholder: string;
}

function InputMaskController(props: InputMaskControllerProps) {
  const { control, name, rules, mask, placeholder } = props;
  const { children = (inputProps) => <Input {...inputProps} type="text" /> } = props;
  return (
    <Controller
      render={({ field }) => (
        <InputMask
          mask={mask}
          value={field.value || ''}
          onChange={(e) => field.onChange(e.target.value)}
          placeholder={placeholder}
        >
          {children}
        </InputMask>
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export default InputMaskController;

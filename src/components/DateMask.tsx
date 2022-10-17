import React from 'react';
import { Control } from 'react-hook-form';
import InputMaskController from './InputMaskController';

/** Masked Input for a date, for use with react-hook-form  */
function DateMask({
  control,
  rules,
  name,
  placeholder,
}: {
  /** control of react hook form */
  control: Control;
  /** register options, see https://react-hook-form.com/api/useform/register#options */
  rules?: any;
  /** field name to control */
  name: string;
  /** placeholder for empty field */
  placeholder?: string;
}) {
  return (
    <InputMaskController
      mask="99.99.99"
      control={control}
      name={name}
      placeholder={placeholder || 'DD.MM.YY'}
      rules={rules}
    />
  );
}

export default DateMask;

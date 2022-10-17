import React from 'react';
import { classNames } from '../util/classNames';

const getValue = (key, value) => key.split('.').reduce((o, i) => o?.[i], value);

export const FieldErrorMessage = ({ errors, name, type, className, children }: any) => {
  const error = getValue(name, errors);
  if (!error || (type && error.type !== type)) {
    return null;
  }
  return <span className={classNames('text-red-600', className)}>{error.message || children}</span>;
};
export default FieldErrorMessage;

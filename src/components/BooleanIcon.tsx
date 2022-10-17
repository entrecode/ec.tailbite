import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const BooleanIcon = ({ value }: { value: boolean }) =>
  value ? (
    <CheckIcon className="w-4 h-4 text-green-700 text-opacity-85" />
  ) : (
    <XMarkIcon className="w-4 h-4 text-red-700 text-opacity-85" />
  );

export default BooleanIcon;

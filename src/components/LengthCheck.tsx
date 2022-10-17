import React from 'react';
import { FieldValues, UseFormWatch } from 'react-hook-form';

/**
 * Checks the length of the value of the given field. 
 */
function LengthCheck({ max, name, watch } : {
  max: number,
  name: string,
  watch: (sting) => UseFormWatch<FieldValues>
}) {
  const value = watch(name);
  return (
    <span className="text-xs">
      {max - (value?.length || 0)} / {max}
    </span>
  );
}

export default LengthCheck;

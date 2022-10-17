import React, { useMemo } from 'react';
import OptionsMenu from './OptionsMenu';
import Input from './Input';

function RadioDropdown({ value, onChange, options, children }) {
  const name = useMemo(() => 'radio-' + window.crypto.getRandomValues(new Uint32Array(1))[0], []);
  return (
    <OptionsMenu $right button={children} dropdownClasses="!w-72">
      {Object.entries(options).map(([key, label]) => (
        <OptionsMenu.Item className="!py-0" key={key}>
          <Input.Radio name={name} value={key} checked={value === key} onChange={() => onChange(key)}>
            {label}
          </Input.Radio>
        </OptionsMenu.Item>
      ))}
    </OptionsMenu>
  );
}
export default RadioDropdown;

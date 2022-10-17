import React from 'react';
import { Control, Controller } from 'react-hook-form';
import SimpleSelect, { SelectItem } from './SimpleSelect';

export interface SelectInputProps {
  items: SelectItem<string>[];
  placeholder?: string;
  renderPlaceholder?: (value: string, items: SelectItem<string>[]) => React.ReactNode;
  control: Control<any, any>;
  name: string;
  rules?: any;
}

function SelectInput(props) {
  const { items, placeholder, control, name, rules, renderPlaceholder, className } = props;
  return (
    <Controller
      render={({ field }) => (
        <SimpleSelect
          className={className}
          placeholder={renderPlaceholder?.(field.value) ?? placeholder}
          items={items}
          value={field.value}
          onChange={field.onChange}
        />
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}
export default SelectInput;

import React, { useEffect, useState } from 'react';
import Form from './Form';

type DropdownItems = {
  label: string;
  value: any;
}[];

const InputWithDropdown = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  dropdown,
}: {
  label: string;
  name: string;
  placeholder?: string;
  value: any;
  onChange: (inputValue: any, dropdownValue: any) => void;
  dropdown: {
    items: DropdownItems;
    label: string;
    name: string;
    value: any;
  };
}) => {
  const [dropdownValue, setDropdownValue] = useState(dropdown.value);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
    setDropdownValue(dropdown.value);
  }, [value, dropdown]);

  useEffect(() => {
    onChange(inputValue, dropdownValue);
  }, [inputValue, dropdownValue]);

  return (
    <Form.Item>
      <Form.Item.Label htmlFor={name}>{label}</Form.Item.Label>
      <Form.Item.Body>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name={name}
            id={name}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder={placeholder}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <InputWithDropdown.Dropdown {...dropdown} value={dropdownValue} onSelect={(e) => setDropdownValue(e)} />
          </div>
        </div>
      </Form.Item.Body>
    </Form.Item>
  );
};

InputWithDropdown.Dropdown = ({
  label,
  name,
  items,
  value,
  onSelect,
}: {
  label: string;
  name: string;
  items: DropdownItems;
  value: string;
  onSelect: (value: any) => void;
}) => {
  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onSelect(e.target.value)}
        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
      >
        {items.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default InputWithDropdown;

import React, { useEffect, useId, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import Input from './Input';
import { SelectItem } from './SimpleSelect';

function Autofill(props: {
  items: SelectItem<string>[];
  value: string;
  autoFocus?: boolean;
  onChange?: (value: string, shouldChangeValueFromOutside?: boolean) => void;
  filter?: boolean | ((item: SelectItem<string>, value: string) => boolean);
  renderInput?: (props) => JSX.Element;
  onSelect?: (value: string, item: SelectItem<string>) => void;
  placeholder?: string;
}) {
  const { items = [], value, onChange, filter = true, renderInput, onSelect, placeholder = '', autoFocus } = props;
  const filteredItems = filter
    ? items.filter(
        typeof filter === 'function'
          ? (item) => filter(item, value)
          : (item) => item.label.toLowerCase().includes(value.toLowerCase()),
      )
    : items;
  const listId = useId();
  return (
    <div className="relative">
      <Input
        type="text"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        list={listId}
      />
      <datalist id={listId}>
        {filteredItems.map((item) => (
          <option value={item.label} key={item.label} />
        ))}
      </datalist>
    </div>
  );
}

// same as autofill but value / onChange holds object instead of string + getLabel to determine what's used to search / display
export function AutofillPicker({ items, onChange, value, getLabel, filter, placeholder, onType, debounce = 500 }: any) {
  const [inputValue, setInputValue] = useState(value ? getLabel(value) : '');
  useEffect(() => {
    setInputValue(value ? getLabel(value) : '');
  }, [value]);
  const handleChange = (v) => {
    setInputValue(v);
  };
  useDebounce(inputValue.length > 1 ? inputValue : '', debounce, onType);
  const _items = React.useMemo(() => items?.map((item) => ({ label: getLabel(item), value: item })) || [], [items]);
  return (
    <Autofill
      filter={filter}
      value={inputValue}
      onChange={handleChange}
      onSelect={(_, item) => onChange(item.value)}
      placeholder={placeholder}
      items={_items}
    />
  );
}

export function AutofillExample() {
  const [value, setValue] = useState('');
  return (
    <div className="max-w-md">
      <Autofill
        filter={true}
        value={value}
        onChange={setValue}
        placeholder="Land suchen..."
        items={['Deutschland', 'Frankreich', 'Schweiz'].map((label) => ({ label, value: label }))}
      />
      {value}
    </div>
  );
}

export default Autofill;

import { PlusIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import Button from './Button';
import Dropdown from './Dropdown';
import Input from './Input';

export function TagsInput({ name, rules, control }: { name: string; rules?: any; control: any }) {
  return (
    <Controller
      render={({ field }) => <TagsPicker value={field.value} onChange={field.onChange} />}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export function TagsPicker({ value, onChange }) {
  const [input, setInput] = useState('');
  const add = () => {
    if (input && !value.includes(input)) {
      onChange(value.concat([input]));
      setInput('');
    }
  };
  return (
    <div className="flex-col">
      <div className="flex items-center flex-wrap">
        {(value || [])
          .map((item) => (typeof item !== 'object' ? { value: item, label: item } : item))
          .map((item) => (
            <Badge
              hasX
              key={item.value}
              theme="gray"
              onX={() => onChange(value.filter((v) => v !== item.value))}
              className="mr-2 mb-2"
            >
              {item.label}
            </Badge>
          ))}
      </div>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Tag eingeben.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              add();
            }
          }}
        />
        <Button.Action $primary onClick={() => add()}>
          <PlusIcon className="w-4 h-4" />
        </Button.Action>
      </div>
      {/* <PlusDropdown items={items} value={value} onChange={onChange} /> */}
    </div>
  );
}

function PlusDropdown({ items, value, onChange }: { items; onChange: (v: any) => void; value: any }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dropdown
        showIcon={false}
        label={
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full w-7 h-7 flex items-center justify-center border-dashed border-2 text-gray-400 border-gray-400"
          >
            <PlusIcon className="w-4 h-4" />
          </div>
        }
      >
        <Dropdown.Panel $right>
          {items.map((item) => (
            <Dropdown.Checkbox
              checked={value.includes(item.value)}
              onChange={(e) =>
                onChange(
                  e.target.checked ? (value || []).concat([item.value]) : (value || []).filter((v) => v !== item.value),
                )
              }
              key={item.value}
            >
              {item.label}
            </Dropdown.Checkbox>
          ))}
        </Dropdown.Panel>
      </Dropdown>
    </>
  );
}

function Badge({ children, theme = 'gray', showDot = false, hasX = false, onX, className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium dark:bg-${theme}-600 dark:text-${theme}-200 bg-${theme}-100 text-${theme}-800 ${className}`}
    >
      {showDot && (
        <svg className={`-ml-0.5 mr-1.5 h-2 w-2 text-${theme}-400`} fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
      )}
      {children}
      {hasX && (
        <button
          type="button"
          onClick={onX}
          className={`-mr-0.5 flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-${theme}-400 hover:bg-${theme}-200 hover:text-${theme}-500 focus:outline-none focus:bg-${theme}-500 focus:text-white`}
        >
          <span className="sr-only">Remove large option</span>
          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      )}
    </span>
  );
}

type BadgeProps = {
  children: React.ReactNode;
  theme?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | '${theme}' | 'purple' | 'pink';
  showDot?: boolean;
  onX?: () => void;
  hasX?: boolean;
  className?: string;
};

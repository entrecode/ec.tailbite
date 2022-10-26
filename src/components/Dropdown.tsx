import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React, { Fragment, useState } from 'react';
import { Controller } from 'react-hook-form';
import tw from 'tailwind-styled-components';
import { classNames } from '../util/classNames';
import randomID from '../util/randomID';
import Form from './Form';
import Input from './Input';

/** Compact Dropdown Component */
function Dropdown({
  children,
  label,
  className,
  showIcon = true,
}: {
  children: React.ReactNode;
  /** label to click */
  label: string | React.ReactNode;
  /** additional classes */
  className?: string;
  showIcon?: boolean;
}) {
  return (
    <Popover as="div" className={`inline-block text-left ${className || ''}`}>
      <div>
        <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900">
          <span>{label}</span>
          {showIcon && (
            <ChevronDownIcon
              className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          )}
        </Popover.Button>
      </div>
      <div className="relative z-[64]">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Popover.Panel>{children}</Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
}

export const DropdownPanel = ({
  children,
  $right,
}: {
  children: React.ReactNode;
  /** If true, the dropdown will be aligned right */
  $right?: boolean;
}) => (
  <div
    className={`
${
  $right ? 'origin-top-right right-0' : 'origin-top-left left-0'
} absolute mt-2 bg-white dark:bg-gray-800 rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none z-[64]
`}
  >
    {children}
  </div>
);
Dropdown.Panel = DropdownPanel;

export const DropdownCheckbox = ({
  checked,
  onChange,
  children,
  className,
}: {
  checked: boolean;
  /** onChange callback */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
  /** Additional classes */
  className?: string;
}) => {
  const id = randomID();
  return (
    <div className={classNames('flex items-center', className)}>
      <Input type="checkbox" id={id} name={id} checked={checked || false} onChange={onChange} />
      <label
        htmlFor={id}
        className="ml-3 pr-6 text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap select-none"
      >
        {children}
      </label>
    </div>
  );
};
Dropdown.Checkbox = DropdownCheckbox;

declare interface DropdownItem {
  label: string;
  value?: string;
  [key: string]: any;
}

declare interface DropdownCheckerProps {
  items?: DropdownItem[];
  value: string[];
  onChange: (value: string[]) => void;
  getLabel: (items: DropdownItem[], value: string[]) => string;
  $right?: boolean;
}

// TODO: fuse with Dropdown.Chcker
// this one is used by MembershipSets

export const DropdownChecker = ({ items = [], value, onChange, getLabel, $right }: DropdownCheckerProps) => {
  return (
    <Dropdown
      label={getLabel(
        items.filter((item) => item.value && value?.includes(item.value)),
        value,
      )}
    >
      <Dropdown.Panel $right={$right}>
        <form className={`space-y-4`}>
          {items?.map((item, i) => (
            <Dropdown.Checkbox
              key={i}
              checked={!!item.value && value?.includes(item.value)}
              onChange={(e) => {
                onChange(
                  e.target.checked
                    ? (value || []).concat(item.value ? [item.value] : [])
                    : (value || []).filter((id) => id !== item.value),
                );
              }}
            >
              {item.label}
            </Dropdown.Checkbox>
          ))}
        </form>
      </Dropdown.Panel>
    </Dropdown>
  );
};
Dropdown.Checker = DropdownChecker;

export const DropdownCheckerInput = ({ name, rules, control, items, getLabel }: any) => (
  <Controller
    render={({ field }) => (
      <Dropdown.Checker items={items} value={field.value} onChange={field.onChange} getLabel={getLabel} />
    )}
    control={control}
    name={name}
    rules={rules}
  />
);
Dropdown.CheckerInput = DropdownCheckerInput;

export const DropdownDivider = tw.div`border border-gray-300 dark:border-gray-100`;
Dropdown.Divider = DropdownDivider;

export default Dropdown;

export function DropdownExample() {
  const [evaFilter, setEvaFilter] = useState<boolean | undefined>(undefined);
  return (
    <div className="flex justify-between">
      <Dropdown label={'Left'}>
        <Dropdown.Panel>
          <form className={`space-y-4`}>
            <Dropdown.Checkbox
              checked={evaFilter === true}
              onChange={(e) => setEvaFilter(e.target.checked ? true : undefined)}
            >
              Punkt 1
            </Dropdown.Checkbox>
            <Dropdown.Checkbox
              checked={evaFilter === false}
              onChange={(e) => setEvaFilter(e.target.checked ? false : undefined)}
            >
              Punkt 2
            </Dropdown.Checkbox>
          </form>
        </Dropdown.Panel>
      </Dropdown>
      <Dropdown label={'Right'}>
        <Dropdown.Panel $right>
          <form className={`space-y-4`}>
            <Dropdown.Checkbox
              checked={evaFilter === true}
              onChange={(e) => setEvaFilter(e.target.checked ? true : undefined)}
            >
              Punkt 1
            </Dropdown.Checkbox>
            <Dropdown.Checkbox
              checked={evaFilter === false}
              onChange={(e) => setEvaFilter(e.target.checked ? false : undefined)}
            >
              Punkt 2
            </Dropdown.Checkbox>
          </form>
        </Dropdown.Panel>
      </Dropdown>
    </div>
  );
}

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { classNames } from '../util/classNames';

export interface SelectItem<T> {
  label: string;
  value?: T;
  hidden?: boolean; // TODO: implement everywhere it's used
  divider?: boolean; // if set, a divider will be inserted after the item
}

export interface SimpleSelectProps<T> {
  items: Array<SelectItem<T> /* | { divider: boolean } */>;
  onChange?: (value?: T) => void;
  value?: T;
  placeholder?: string;
  className?: string;
}

export default function SimpleSelect(props: SimpleSelectProps<any>) {
  const { items, onChange, value, placeholder, className } = props;
  const findItemByValue = (_value) => items?.find(({ value }) => value === _value);
  const [selected, setSelected] = useState(findItemByValue(value));
  const handleChange = (item) => {
    setSelected(item);
    onChange?.(item.value);
  };
  useEffect(() => {
    setSelected(findItemByValue(value));
  }, [value, items]);
  const buttonRef = useRef<any>();

  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <div className={classNames('relative min-w-[200px]', className)}>
          <Listbox.Button
            ref={buttonRef}
            className="bg-white dark:bg-gray-700 relative w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
          >
            <span className="block truncate">{selected?.label || selected?.value || placeholder || '-'}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              style={{ width: buttonRef?.current?.clientWidth }}
              className="absolute z-[1200] mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {items?.map((item, i) => (
                <Fragment key={i}>
                  <Listbox.Option
                    className={({ active }) =>
                      classNames(
                        item.hidden && 'hidden',
                        active ? 'bg-primary text-primary-contrast' : 'text-gray-900 dark:text-gray-400 ',
                        'cursor-default select-none relative py-2 pl-3 pr-9',
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                            active ? 'text-primary-contrast' : '',
                          )}
                        >
                          {item.label || item.value}
                        </span>

                        {selected ? (
                          <span className={classNames('absolute inset-y-0 right-0 flex items-center pr-4')}>
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                  {item.divider ? <div className="my-2 border-b border-gray-500" /> : null}
                </Fragment>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}

export function SimpleSelectExample() {
  return (
    <div className="max-w-md">
      <SimpleSelect
        placeholder="Bitte wählen"
        items={[
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
          { label: 'C', value: 'c', divider: true },
          { label: 'D', value: 'd' },
          { label: 'E', value: 'e' },
        ]}
      />
    </div>
  );
}

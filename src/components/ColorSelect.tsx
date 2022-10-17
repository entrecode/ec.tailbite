import { Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { interpolateSinebow } from 'd3-scale-chromatic';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import tinycolor from 'tinycolor2';
import { classNames } from '../util/classNames';
export const isDark = () => document.body.className.includes('dark');

export const circularColor = (fraction) => tinycolor(interpolateSinebow(fraction)).lighten(25).toHexString();

export const defaultColors = Array(16)
  .fill(0)
  .map((_, i) => circularColor(i / 16));

export function ColorSelect({ value, onChange, colors = defaultColors }: any) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="cursor-pointer">
          <div
            className="w-12 h-12 rounded-md border border-gray-700 dark:border-gray-500"
            style={{ backgroundColor: value || 'white' }}
          ></div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="z-[101] origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700">
          <div className="grid grid-cols-4 gap-4 p-4">
            {colors?.map((color: any) => (
              <div
                key={color}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange?.(color);
                }}
                className={classNames(
                  'w-12 h-12 rounded-md border border-gray-700 dark:border-gray-500 flex justify-center items-center cursor-pointer',
                  value === color ? 'border-white' : '',
                )}
                style={{ backgroundColor: color }}
              >
                {value === color && <XMarkIcon className="w-8 h-8" />}
              </div>
            ))}
          </div>
        </div>
      </Transition>
    </Menu>
  );
}

export function ColorSelectInput(props) {
  const { items, placeholder, control, name, rules, renderPlaceholder, className } = props;
  return (
    <Controller
      render={({ field }) => <ColorSelect className={className} value={field.value} onChange={field.onChange} />}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export default ColorSelect;

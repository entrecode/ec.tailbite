import { Popover, Transition } from '@headlessui/react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import { Controller } from 'react-hook-form';
import { classNames } from '../util/classNames';
import Input from './Input';
/* import { ColorSwatchIcon } from '@heroicons/react/24/outline'; */

/** Simple hex color picker */
function ColorPicker({
  value: valueProp,
  onChange,
  presetColors,
  className,
  buttonClass,
}: {
  /** the current color */
  value: string;
  /** called when the color changes */
  onChange: (value: string | null) => void;
  /** an array of preset colors to show */
  presetColors?: string[];
  /** additional class names */
  className?: string;
  buttonClass?: string;
}) {
  const [value, setValue] = useState(valueProp);
  useEffect(() => {
    setValue(valueProp || '#ffffff');
  }, [valueProp]);
  return (
    <Popover as="div" className={classNames(`relative inline-block text-left`, className)}>
      <div className="rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
        <Popover.Button
          className={classNames('w-16 h-16 p-8 text-white flex items-center justify-center', buttonClass)}
          style={{ backgroundColor: value }}
        >
          {/* <ColorSwatchIcon className="block w-8 h-8" /> */}
        </Popover.Button>
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
        <Popover.Panel className="z-20 origin-bottom-left absolute left-0 mt-2">
          <SketchPicker
            presetColors={presetColors || []}
            color={value}
            onChangeComplete={(value) => onChange(value?.hex || null)}
            onChange={(value) => setValue(value?.hex || null)}
          />
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export function ColorPickerInput(props) {
  const { presetColors, control, name, rules, className, buttonClass } = props;
  return (
    <Controller
      render={({ field }) => (
        <ColorPicker
          className={className}
          buttonClass={buttonClass}
          value={field.value}
          onChange={field.onChange}
          presetColors={presetColors}
        />
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

/**
 * Picker styled to work in Sidebar forms
 */
export function InlinePicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [color, setColor] = React.useState(value);

  return (
    <Popover className="relative">
      <Popover.Button className="flex gap-2 items-center border dark:border-gray-800 border-gray-300 rounded-lg p-2">
        <div className="w-7 h-7 border rounded-lg" style={{ backgroundColor: color }}></div>
        <span style={{ fontFamily: 'monospace' }}>{color || 'none'}</span>
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <SketchPicker
          presetColors={[]}
          color={color}
          onChangeComplete={(value) => onChange(value?.hex || null)}
          onChange={(value) => setColor(value?.hex || null)}
        />
      </Popover.Panel>
    </Popover>
  );
}

export function NativeColorPickerInput(props) {
  const { control, name, rules, className, placeholder, hideTextInput } = props;
  const pickerRef = useRef<any>();
  return (
    <Controller
      render={({ field }) => (
        <div className={classNames('max-w-lg flex rounded-md shadow-sm', className)}>
          <div
            className={classNames(
              'w-8 h-8 cursor-pointer overflow-hidden inline-flex border border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-600 text-gray-500 dark:text-gray-100 sm:text-sm',
              hideTextInput ? 'rounded-md' : 'border-r-0 rounded-l-md',
            )}
            style={{ backgroundColor: field.value }}
            onClick={() => pickerRef?.current?.click()}
          >
            <Input.Color
              value={field.value || '#ffffff'}
              onChange={field.onChange}
              className="w-8 h-full opacity-0 pointer-events-none"
              ref={pickerRef}
            />
          </div>
          {!hideTextInput && (
            <input
              type="text"
              value={field.value || ''}
              onChange={field.onChange}
              placeholder={placeholder}
              className="w-24 block pl-2 min-w-0 rounded-none rounded-r-md focus:ring-primary focus:border-primary sm:text-sm border-gray-300 dark:border-gray-500 dark:bg-gray-700"
            />
          )}
        </div>
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export default ColorPicker;

export const ColorPickerExample = () => {
  const [value, setValue] = useState('#FF00AA');
  return <ColorPicker value={value} onChange={setValue} />;
};

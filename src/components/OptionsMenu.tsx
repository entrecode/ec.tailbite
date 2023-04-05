import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react';
import { classNames } from '../util/classNames';
import Ink from './Ink';

// https://tailwindui.com/components/application-ui/elements/dropdowns
const OptionsMenu: any = ({
  children,
  $right,
  button,
  dropdownClasses = '',
}: {
  children: React.ReactNode;
  $right?: boolean;
  button?: any;
  dropdownClasses?: string;
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button as="div">
          {button || (
            <div className="flex items-center focus:outline-none px-2 py-1 cursor-pointer">
              <Ink.Primary>
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Ink.Primary>
            </div>
          )}
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
        <Menu.Items
          className={classNames(
            $right ? 'origin-top-right right-0' : 'origin-top-left left-0',
            'z-[31] absolute mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none',
            dropdownClasses,
          )}
        >
          <div className="py-1">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export const OptionsMenuItem = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <Menu.Item>
    {({ active }) => (
      <a
        onClick={onClick}
        className={classNames(
          'block px-4 py-2 text-sm text-gray-800 dark:text-gray-100 cursor-pointer',
          active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100' : '',
          className,
        )}
      >
        {children}
      </a>
    )}
  </Menu.Item>
);

OptionsMenu.Item = OptionsMenuItem;

export function OptionsMenuExample() {
  return (
    <div className="flex justify-between">
      <OptionsMenu>
        <OptionsMenu.Item onClick={() => alert('click')}>Bearbeiten</OptionsMenu.Item>
        <OptionsMenu.Item onClick={() => alert('click')}>Löschen</OptionsMenu.Item>
        <OptionsMenu.Item onClick={() => alert('click')}>Vorschau</OptionsMenu.Item>
      </OptionsMenu>
      <OptionsMenu $right>
        <OptionsMenu.Item onClick={() => alert('click')}>Bearbeiten</OptionsMenu.Item>
        <OptionsMenu.Item onClick={() => alert('click')}>Löschen</OptionsMenu.Item>
        <OptionsMenu.Item onClick={() => alert('click')}>Vorschau</OptionsMenu.Item>
      </OptionsMenu>
    </div>
  );
}

export default OptionsMenu;

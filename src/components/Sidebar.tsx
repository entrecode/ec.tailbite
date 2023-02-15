import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { createContext, Fragment, useContext, useState } from 'react';
import { classNames } from '../util/classNames';
import Button from './Button';

const SidebarContext = createContext<any>(null);

// https://tailwindui.com/components/application-ui/overlays/slide-overs#component-ccd8d99d511d401f103d95b4cc04b31a
function Sidebar({
  children,
  open,
  onClose,
  backdrop,
  className,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  backdrop?: boolean;
  className?: string;
}) {
  return (
    <SidebarContext.Provider value={{ open, onClose }}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 overflow-hidden z-[999]" onClose={onClose}>
          <div
            className={classNames(
              'absolute inset-0 overflow-hidden',
              backdrop ? 'bg-gray-500 bg-opacity-50 transition-opacity' : '',
            )}
          >
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className={classNames('w-screen max-w-2xl', className)}>
                  <div className="h-full flex flex-col bg-white dark:bg-gray-700 shadow-xl overflow-y-scroll">
                    {children}
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </SidebarContext.Provider>
  );
}

Sidebar.Head = ({ children }: any) => {
  return (
    <div className="pt-6 px-4 sm:px-6">
      <div className="flex items-start justify-between">{children}</div>
    </div>
  );
};

Sidebar.Heading = ({ children }: any) => {
  return (
    <Dialog.Title className="overflow-hidden text-lg font-medium text-gray-900 dark:text-gray-200">
      {children}
    </Dialog.Title>
  );
};

Sidebar.X = ({ onClose: onCloseProp }: any) => {
  const { onClose } = useContext(SidebarContext);
  // focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
  return (
    <div className="ml-3 h-7 flex items-center">
      <button
        type="button"
        className="rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={onCloseProp || onClose}
      >
        <span className="sr-only">Close panel</span>
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

Sidebar.Body = ({ children }: any) => {
  return <div className="pb-6 relative flex-1 px-4 sm:px-6">{children}</div>;
};

Sidebar.Footer = ({ children }) => {
  return <div className="sticky bottom-0 bg-white px-6 py-3 border-t border-gray-200">{children}</div>;
};

export default Sidebar;

export function SidebarExample() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button $primary onClick={() => setOpen(true)}>
        open
      </Button>
      <Sidebar open={open} onClose={() => setOpen(false)}>
        <Sidebar.Head>
          <Sidebar.Heading>Sidebar Heading</Sidebar.Heading>
          <Sidebar.X />
        </Sidebar.Head>
        <Sidebar.Body>
          <p>This is the Body</p>
        </Sidebar.Body>
      </Sidebar>
    </>
  );
}

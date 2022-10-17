import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import React, { createContext, useContext } from 'react';
import { classNames } from '../util/classNames';

const DisclosureContext = createContext<any>(undefined);

const Accordion = ({
  children,
  className,
}: {
  children: any;
  /** Additional Classes for outer div */
  className?: string;
}) => {
  // automatically set $first and $last flags for children
  if (Array.isArray(children)) {
    children = children.map(({ props, ...child }, i) => ({
      props: { ...props, $first: !i, $last: i === children.length - 1 },
      ...child,
    }));
  } else if (typeof children === 'object') {
    // only one element
    children = { ...children, props: { ...children.props, $first: true, $last: true } };
  }
  return (
    <div className={classNames(`flex flex-col`, className)}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow border-b border-gray-200 dark:border-gray-800 sm:rounded-lg">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const AccordionItem = ({
  children,
  $first,
  $last,
}: {
  /** If true, the item will be opened by default */
  children: any;
  $first?: boolean;
  $last?: boolean;
}) => {
  return (
    <Disclosure>
      {(ctx) => <DisclosureContext.Provider value={{ ctx, $first, $last }}>{children}</DisclosureContext.Provider>}
    </Disclosure>
  );
};
Accordion.Item = AccordionItem;

export const AccordionHead = ({
  children,
}: {
  /** Label */
  children: string;
}) => {
  const {
    ctx: { open },
    $first,
    $last,
  } = useContext(DisclosureContext);
  return (
    <Disclosure.Button
      className={classNames(
        'border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-700 flex w-full justify-between px-4 py-4 text-left text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-200 focus-visible:ring-indigo-500 focus-visible:ring-opacity-75',
        $first ? 'rounded-t-md' : '',
        $last && !open ? 'rounded-b-md' : '',
      )}
    >
      <span>{children}</span>
      <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-4 w-4`} />
    </Disclosure.Button>
  );
};
Accordion.Head = AccordionHead;

export const AccordionBody = ({
  children,
  className,
}: {
  children: any;
  /** Additional Classes for outer div  */
  className?: string;
}) => {
  const { $last } = useContext(DisclosureContext);
  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Disclosure.Panel
        className={classNames(
          'bg-white dark:bg-gray-800  text-gray-900 dark:text-gray-200 px-4 py-4 overflow-hidden',
          className,
          $last ? 'rounded-b-md' : '',
        )}
      >
        {children}
      </Disclosure.Panel>
    </Transition>
  );
};

Accordion.Body = AccordionBody;

Accordion.Example = () => {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Head>Logo</Accordion.Head>
        <Accordion.Body>
          If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no
          questions asked.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Head>Farben</Accordion.Head>
        <Accordion.Body>
          If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no
          questions asked.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Accordion;

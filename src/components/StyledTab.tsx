import { Tab } from '@headlessui/react';
import React from 'react';
import tw from 'tailwind-styled-components';
import { classNames } from '../util/classNames';
import Card from './Card';


// TODO add to Storybook
export default function StyledTab({ children }: any) {
  return (
    <Tab
      className={({ selected }) =>
        classNames(
          selected
            ? 'border-indigo-500 text-indigo-600 dark:text-indigo-300 dark:border-indigo-200'
            : 'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 hover:border-gray-300 dark:hover:border-gray-200',
          'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
        )
      }
    >
      {children}
    </Tab>
  );
}

StyledTab.List = ({ children, className }: any) => (
  <Tab.List>
    <div className={classNames('border-b border-gray-200 dark:border-gray-600', className)}>
      <nav className="-mb-px flex space-x-8 items-center" aria-label="Tabs">
        {children}
      </nav>
    </div>
  </Tab.List>
);

// StyledTab.Panel = ({ children }) => <Tab.Panel className="py-4">{children}</Tab.Panel>;
StyledTab.Panel = tw(Tab.Panel)`py-4` as any;

export function StyledTabExample() {
  return (
    <Card>
      <Card.Body>
        <Tab.Group>
          <StyledTab.List>
            <StyledTab>Tab 1</StyledTab>
            <StyledTab>Tab 2</StyledTab>
            <StyledTab>Tab 3</StyledTab>
          </StyledTab.List>
          <Tab.Panels>
            <StyledTab.Panel>Content 1</StyledTab.Panel>
            <StyledTab.Panel>Content 2</StyledTab.Panel>
            <StyledTab.Panel>Content 3</StyledTab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Card.Body>
    </Card>
  );
}

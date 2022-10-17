import React, { ReactNode } from 'react';
import { classNames } from '../util/classNames';
import Card from './Card';

const Tab = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <Card className={classNames('w-full', className)}>{children}</Card>;
};

Tab.Head = ({ children }) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap">{children}</ul>
    </div>
  );
};

Tab.Content = ({ children }) => {
  return (
    <Card.Body>
      <div className="mt-4">{children}</div>
    </Card.Body>
  );
};

interface TabHeaderProps {
  title: string | ReactNode;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

Tab.Header = ({ title, active, onClick, icon }: TabHeaderProps) => {
  const tabsClass = {
    default: 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
    active: 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500 border-b-2',
  };

  return (
    <li className="mr-2">
      <div
        onClick={onClick}
        className={`inline-flex items-center gap-2 p-4 cursor-pointer rounded-t-lg whitespace-nowrap ${
          active ? tabsClass.active : tabsClass.default
        }`}
      >
        {icon} {title}
      </div>
    </li>
  );
};

export default Tab;

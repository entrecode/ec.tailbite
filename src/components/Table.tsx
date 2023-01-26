import { PencilIcon } from '@heroicons/react/24/solid';
import React, { forwardRef } from 'react';
import tw from 'tailwind-styled-components';
import { classNames } from '../util/classNames';
import BooleanIcon from './BooleanIcon';
import Button from './Button';

export const Table = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={classNames(className, 'py-2 align-middle inline-block min-w-full')}>
    <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800 shadow">{children}</table>
    </div>
  </div>
);

export const TableOld = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={classNames('overflow-x-auto sm:-mx-6 lg:-mx-8', className)}>
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">{children}</table>
      </div>
    </div>
  </div>
);

export const TableDense = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={classNames('overflow-x-auto py-2 align-middle inline-block min-w-full', className)}>
    <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-800 sm:rounded-lg relative min-h-16">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">{children}</table>
    </div>
  </div>
);
Table.Dense = TableDense;

export const TableFast = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={classNames('py-2 align-middle inline-block min-w-full lg:p1-8 overflow-x-auto', className)}>
    <div className="shadow border-b border-gray-200 dark:border-gray-800 relative min-h-16">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">{children}</table>
    </div>
  </div>
);
Table.Fast = TableFast;

export const TableHead = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-50 dark:bg-gray-800 ">
    <tr>{children}</tr>
  </thead>
);
Table.Head = TableHead;

export const TableHeader = tw.th<any>`px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider`;
Table.Header = TableHeader;

export const TableBody = forwardRef(({ children }: { children: React.ReactNode }, ref: any) => (
  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-800" ref={ref}>
    {children}
  </tbody>
));
Table.Body = TableBody;

export const striped = (i) => (i % 2 === 0 ? 'bg-white dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-800');
export const hover = 'hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer';

export const TableRow = tw.tr<any>``;
Table.Row = TableRow;

export const TableCell: any = tw.td<any>` text-gray-900 dark:text-gray-200 px-4 py-4 text-sm whitespace-nowrap`;
Table.Cell = TableCell;

Table.Cell.Expander = ({
  id,
  set,
  tooltip = ['ausklappen!!', 'einklappen'],
}: {
  id: string | number;
  set: any; // useSet
  tooltip?: [string, string];
}) => (
  <Table.Cell className="w-12 !p-2">
    <Button.Expander
      tooltip={tooltip}
      onClick={(e) => {
        e.stopPropagation();
        set.toggle(id);
      }}
      active={set.has(id)}
      placement="right"
    />
  </Table.Cell>
);

export default Table;

// Example to copy paste..

const people = Array(12).fill({
  name: 'Jane Cooper',
  title: 'Regional Paradigm Technician',
  department: 'Optimization',
  role: 'Admin',
  email: 'jane.cooper@example.com',
  image:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
});

export function TableExample() {
  return (
    <Table>
      <Table.Head>
        <Table.Header>Name</Table.Header>
        <Table.Header>Title</Table.Header>
        <Table.Header>E-Mail</Table.Header>
        <Table.Header>Is Princess</Table.Header>
        <Table.Header>
          <span className="sr-only">Edit</span>
        </Table.Header>
      </Table.Head>
      <Table.Body>
        {people.map((person, i) => (
          <Table.Row key={i}>
            <Table.Cell>{person.name}</Table.Cell>
            <Table.Cell>{person.title}</Table.Cell>
            <Table.Cell>{person.email}</Table.Cell>
            <Table.Cell>
              <BooleanIcon value={Math.random() > 0.5} />
            </Table.Cell>
            <Table.Cell className="text-right">
              <Button.Action onClick={() => console.log('edit')} tooltip="Bearbeiten" placement="left">
                <PencilIcon className="w-5 h-5" />
              </Button.Action>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

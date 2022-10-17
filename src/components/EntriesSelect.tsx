import * as React from 'react';
import { forwardRef } from 'react';
import useEntryList, { UseEntryListProps } from '../hooks/useEntryList';

declare type EntriesSelectProps = UseEntryListProps & {
  children?: React.ReactNode;
  name: string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
};

export const EntriesSelect = forwardRef<any, EntriesSelectProps>((props, ref) => {
  const { items } = useEntryList(props);
  const { name, onChange, onBlur } = props;
  return (
    <select
      className="input
    bg-white dark:bg-gray-700 relative w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      multiple
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    >
      {items?.map((group, i) => (
        <option key={i} value={group.id}>
          {group._entryTitle}
        </option>
      ))}
    </select>
  );
});

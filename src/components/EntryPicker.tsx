import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import useDebounce from '../hooks/useDebounce';
import useEntryList from '../hooks/useEntryList';
import Searchbar from './Searchbar';
import Spinner from './Spinner';
import cx from '../util/classNames';

function EntryPicker({ model, value, solo, onChange, search = 'title', label = '_entryTitle' }) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query.length > 1 ? query : '', 500);
  const { items: searchResult = [], isValidating } = useEntryList({
    model: debouncedQuery && model ? model : null,
    filterOptions: { [search]: { search: debouncedQuery } },
  });
  const arrayValue = useMemo(() => (Array.isArray(value) ? value : value ? [value] : []), [value]);

  const searchResultAddable = useMemo(
    () => searchResult.filter((t) => !arrayValue.find((_t: any) => _t.id === t.id)),
    [searchResult, arrayValue],
  );

  return (
    <div className="space-y-4">
      <div className="max-w-full">
        {arrayValue?.map((entry) => (
          <Tag
            key={entry.id}
            label={entry._entryTitle}
            onX={
              !entry._entryTitle.startsWith('Redakteur:')
                ? () => {
                    onChange(solo ? null : arrayValue.filter((t) => t.id !== entry.id));
                  }
                : undefined
            }
          />
        ))}
      </div>
      <div className="relative space-y-2">
        <Searchbar value={query} onChange={setQuery} />
        {isValidating && (
          <div className="absolute right-2 top-2">
            <Spinner />
          </div>
        )}
      </div>
      <div className="space-y-1">
        {searchResultAddable?.map((entry) => (
          <div
            key={entry.id}
            className="p-1.5 rounded-md flex justify-between cursor-pointer border border-gray-200 hover:bg-gray-50 select-none"
            onClick={() => {
              const select = { id: entry.id, _entryTitle: entry[label] };
              onChange(solo ? select : value.concat([select]));
            }}
          >
            <span>{entry[label]}</span>
            <PlusIcon className="w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default EntryPicker;

export function EntryPickerInput({
  control,
  name,
  rules,
  solo,
  ...rest
}: {
  model: string;
  solo?: boolean;
  control: any;
  name: string;
  rules?: any;
  [prop: string]: any;
}) {
  return (
    <Controller
      render={({ field }) => (
        <EntryPicker solo={solo || false} value={field.value} onChange={field.onChange} {...rest} />
      )}
      control={control}
      name={name}
      rules={rules}
    />
  );
}
export function Tag({ label, onX, onClick }: { label: string; onX?: () => void; onClick?: () => any }) {
  return (
    <div
      className={cx(
        'inline-block mr-2 mt-2 bg-gray-200 p-1.5 rounded-md select-none',
        onClick && 'hover:opacity-80 cursor-pointer',
      )}
      onClick={onClick}
    >
      <div className="flex items-center">
        {label}
        <div className="cursor-pointer hover:bg-gray-100 rounded-full" onClick={onX}>
          {onX && <XMarkIcon className="w-5 h-5" />}
        </div>
      </div>
    </div>
  );
}

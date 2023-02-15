import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { useMemo, useRef, useState } from 'react';
import useEntryList from '../../hooks/useEntryList';
import useEntrySearch from '../../hooks/useEntrySearch';
import useFloatingElement from '../../hooks/useFloatingElement';
import classNames from '../../util/classNames';
import Searchbar from '../Searchbar';
import Spinner from '../Spinner';
import Tag from '../Tag';
import { EntryPickerProps } from './EntryPicker';

function EntryPickerMulti({
  model,
  value,
  onChange,
  search = 'title',
  label = '_entryTitle',
  canRemove,
}: EntryPickerProps<string[]>) {
  const clicktrap = useRef<any>();
  const { open: showDropdown, setOpen: setShowDropdown } = useFloatingElement(clicktrap);
  const { searchResult, query, setQuery, isValidating } = useEntrySearch({
    model: showDropdown ? model : null,
    searchEmpty: true,
    exclude: value,
    search,
  });
  const { items: selectedEntriesUnsorted, isValidating: isValidatingSelection } = useEntryList({
    model: value.length ? model : null,
    filterOptions: { id: { any: value } },
  });
  const selectedEntries = useMemo(
    () =>
      selectedEntriesUnsorted
        ? (value.map((id) => selectedEntriesUnsorted.find((e) => e.id === id)) as EntryResource[])
        : null,
    [selectedEntriesUnsorted],
  );
  return (
    <div className="space-y-4 max-w-full relative">
      <div className="max-w-full">
        {selectedEntries?.map((entry) => (
          <Tag
            key={entry.id}
            label={entry._entryTitle}
            onX={!canRemove || canRemove(entry) ? () => onChange(value.filter((id) => id !== entry.id)) : undefined}
          />
        ))}
        {!selectedEntries && isValidatingSelection && <Tag label="..." />}
      </div>
      <div className="space-y-1" ref={clicktrap}>
        <div className="relative">
          <Searchbar value={query} onChange={setQuery} onFocus={() => setShowDropdown(true)} />
          {isValidating && (
            <div className="absolute right-2 top-2">
              <Spinner />
            </div>
          )}
        </div>
        {showDropdown && (
          <div className="absolute rounded-md shadow z-[200] bg-bg p-2 w-full">
            {
              /* addable */ searchResult?.map((entry, i) => (
                <div
                  key={entry.id}
                  className={classNames(
                    'flex space-x-2 cursor-pointer hover:bg-gray-50 select-none py-2',
                    i && 'border-t border-gray-200',
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    // toggle id in value
                    if (value.includes(entry.id)) {
                      onChange(value.filter((id) => id !== entry.id));
                    } else {
                      onChange(value.concat([entry.id]));
                    }
                  }}
                >
                  {value.includes(entry.id) ? <MinusIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
                  <span>{entry[label]}</span>
                </div>
              ))
            }
            {!isValidating && searchResult && !searchResult.length && 'Kein Ergebnis'}
            {isValidating && <Spinner />}
          </div>
        )}
      </div>
    </div>
  );
}
export default EntryPickerMulti;

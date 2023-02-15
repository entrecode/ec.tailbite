import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';
import useEntry from '../../hooks/useEntry';
import useEntrySearch from '../../hooks/useEntrySearch';
import useFloatingElement from '../../hooks/useFloatingElement';
import classNames from '../../util/classNames';
import Searchbar from '../Searchbar';
import Spinner from '../Spinner';
import Tag from '../Tag';
import { EntryPickerProps } from './EntryPicker';

function EntryPickerSolo({
  model,
  value,
  onChange,
  search = 'title',
  label = '_entryTitle',
  canRemove,
}: EntryPickerProps<string | null>) {
  const clicktrap = useRef<any>();
  const { open: showDropdown, setOpen: setShowDropdown } = useFloatingElement(clicktrap);
  const { addable, query, setQuery, isValidating } = useEntrySearch({ model, search, searchEmpty: true });
  const {
    data: selectedEntry,
    isValidating: selectionLoading,
    // mutate,
  } = useEntry({
    model,
    id: value,
    swrOptions: {
      use: [
        /* laggySWR */
      ],
      revalidateOnFocus: false,
    },
  });
  return (
    <div className="space-y-4">
      <div className="max-w-full">
        {selectedEntry && (
          <Tag
            label={selectedEntry[label]}
            onX={!canRemove || canRemove(selectedEntry) ? () => onChange(null) : undefined}
          />
        )}
        {!selectedEntry && selectionLoading && <Tag label="..." />}
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
            <div className="space-y-1">
              {addable?.map((entry, i) => (
                <div
                  key={entry.id}
                  className={classNames(
                    'flex space-x-2 cursor-pointer hover:bg-gray-50 select-none py-2',
                    i && 'border-t border-gray-200',
                  )}
                  onClick={() => {
                    // mutate(entry, { optimisticData: entry, populateCache: true, revalidate: false });
                    onChange(value !== entry.id ? entry.id : null);
                    setShowDropdown(false);
                  }}
                >
                  {value === entry.id ? <MinusIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
                  <span>{entry[label]}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default EntryPickerSolo;

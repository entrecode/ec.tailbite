import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { useRef, useState } from 'react';
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
  filterOptions,
}: EntryPickerProps<string | null>) {
  const clicktrap = useRef<any>();
  const { open: showDropdown, setOpen: setShowDropdown } = useFloatingElement(clicktrap);
  const { addable, query, setQuery, isValidating } = useEntrySearch({
    model,
    search,
    searchEmpty: true,
    filterOptions,
  });
  const [selectedEntry, setSelectedEntry] = useState<EntryResource | null>();
  const shouldLoad = value !== (selectedEntry?.id || null);
  const {
    // data: selectedEntry,
    isValidating: isValidatingSelection,
    // mutate,
  } = useEntry({
    model: shouldLoad ? model : null,
    id: value,
    swrOptions: {
      onSuccess: (entry) => setSelectedEntry(entry),
      revalidateOnFocus: false,
    },
  });
  const isLoadingSelection = shouldLoad || isValidatingSelection;
  const isEmptySelection = !isLoadingSelection && !selectedEntry;
  return (
    <div className="space-y-4">
      <div className="max-w-full">
        {!isValidatingSelection && selectedEntry && (
          <Tag
            label={selectedEntry[label]}
            onX={
              !canRemove || canRemove(selectedEntry)
                ? () => {
                    onChange(null);
                    setSelectedEntry(null);
                  }
                : undefined
            }
          />
        )}
        {isLoadingSelection && <Tag label="Laden..." />}
        {isEmptySelection && <Tag label="Nichts ausgewählt" />}
      </div>
      <div className="relative space-y-1" ref={clicktrap}>
        <Searchbar value={query} onChange={setQuery} onFocus={() => setShowDropdown(true)} loading={isValidating} />
        {showDropdown && (
          <div className="absolute top-10 rounded-md shadow z-[200] bg-bg p-2 w-full">
            <div className="space-y-1">
              {addable?.map((entry, i) => (
                <div
                  key={entry.id}
                  className={classNames(
                    'flex space-x-2 cursor-pointer hover:bg-gray-50 select-none py-2',
                    i && 'border-t border-gray-200',
                  )}
                  onClick={() => {
                    onChange(value !== entry.id ? entry.id : null);
                    setSelectedEntry(value !== entry.id ? entry : null);
                    setShowDropdown(false);
                  }}
                >
                  <PlusIcon className={classNames('w-6 h-6', value === entry.id && 'rotate-45')} />
                  <span>{entry[label]}</span>
                </div>
              ))}
              {!isValidating && addable && !addable.length && 'Kein Ergebnis'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default EntryPickerSolo;

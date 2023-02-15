import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import EntryList from 'ec.sdk/lib/resources/publicAPI/EntryList';
import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { useMemo, useRef, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import useEntryList from '../../hooks/useEntryList';
import useEntrySearch from '../../hooks/useEntrySearch';
import useFloatingElement from '../../hooks/useFloatingElement';
import classNames from '../../util/classNames';
import { laggySWR } from '../../util/laggySWR';
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

  // searchable dropdown list below searchbar
  const { searchResult, query, setQuery, isValidating } = useEntrySearch({
    model: showDropdown ? model : null,
    searchEmpty: true,
    exclude: value,
    search,
  });
  const [selectedEntries, setSelectedEntries] = useState<EntryResource[]>([]);

  // resolves selected entries from string ids in value
  const shouldLoad = value.join('-') !== selectedEntries.map((s) => s.id).join('-');
  const { isValidating: isValidatingSelection } = useEntryList({
    model: shouldLoad && value.length ? model : null,
    filterOptions: { id: { any: value } },
    swrOptions: {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        console.log('loaded values from string ids!!');
        setSelectedEntries(value.map((id) => data.items.find((e) => e.id === id) as EntryResource));
      },
    },
  });
  const isLoadingSelection = shouldLoad || isValidatingSelection;
  const isEmptySelection = !isLoadingSelection && selectedEntries && !selectedEntries.length;
  return (
    <div className="space-y-4 max-w-full relative">
      <div className="max-w-full">
        {!isValidatingSelection &&
          selectedEntries?.map((entry) => (
            <Tag
              key={entry.id}
              label={entry._entryTitle}
              onX={
                !canRemove || canRemove(entry)
                  ? () => {
                      onChange(value.filter((id) => id !== entry.id));
                      setSelectedEntries((selectedEntries) => selectedEntries.filter((e) => e.id !== entry.id));
                    }
                  : undefined
              }
            />
          ))}
        {isLoadingSelection && <Tag label="Laden..." />}
        {isEmptySelection && <Tag label="Nichts ausgewählt" />}
      </div>
      <div className="relative space-y-1" ref={clicktrap}>
        <Searchbar value={query} onChange={setQuery} onFocus={() => setShowDropdown(true)} loading={isValidating} />
        {showDropdown && (
          <div className="absolute top-10 rounded-md shadow z-[200] bg-bg p-2 w-full">
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
                    setSelectedEntries((selected) => {
                      if (selected.find((e) => e.id === entry.id)) {
                        selected = selected.filter((e) => e.id !== entry.id);
                      } else {
                        selected = selected.concat([entry]);
                      }
                      return selected;
                    });
                    onChange(
                      value.includes(entry.id) ? value.filter((id) => id !== entry.id) : value.concat([entry.id]),
                    );
                  }}
                >
                  <PlusIcon
                    className={classNames('transition-transform w-6 h-6', value.includes(entry.id) && 'rotate-45')}
                  />
                  <span>{entry[label]}</span>
                </div>
              ))
            }
            {!isValidating && searchResult && !searchResult.length && 'Kein Ergebnis'}
          </div>
        )}
      </div>
    </div>
  );
}
export default EntryPickerMulti;

import EntryList from 'ec.sdk/lib/resources/publicAPI/EntryList';
import { useMemo, useState } from 'react';
import { SWRConfiguration } from 'swr';
import useDebounce from './useDebounce';
import useEntryList from './useEntryList';

export declare interface UseEntrySearchProps {
  model: string | null;
  search?: string;
  exclude?: string[];
  searchEmpty?: boolean; // if true, the search will also trigger when the query is empty
  swrOptions?: SWRConfiguration<EntryList, any>; // TODO: add error typing
}

function useEntrySearch({ model, search = 'title', exclude = [], searchEmpty = false }: UseEntrySearchProps) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query.length > 1 ? query : '', 500);
  const swrResponse = useEntryList({
    model: (searchEmpty || debouncedQuery) && model ? model : null,
    filterOptions: { [search]: { search: debouncedQuery } },
  });
  const { items: searchResult = [] } = swrResponse;
  const searchResultAddable = useMemo(
    () => searchResult.filter((t) => !exclude.find((id) => id === t.id)),
    [searchResult, exclude],
  );
  return { ...swrResponse, addable: searchResultAddable, searchResult, query, setQuery };
}
export default useEntrySearch;

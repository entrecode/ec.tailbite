import { filterOptions } from 'ec.sdk/lib/resources/ListResource';
import EntryList from 'ec.sdk/lib/resources/publicAPI/EntryList';
import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { SWRConfiguration, SWRResponse } from 'swr';
export interface UseEntryListReturn<T = EntryResource> extends SWRResponse<EntryList, any> {
    count: number;
    total: number;
    items: Array<T> | undefined;
}
export interface UseEntryListProps {
    model: string | null;
    filterOptions?: filterOptions;
    swrOptions?: SWRConfiguration<EntryList, any>;
    filter?: (entry: EntryResource, i: number, entries: EntryResource[]) => boolean;
    edit?: (result: any) => any;
}
declare function useEntryList<T = EntryResource>(props: UseEntryListProps): UseEntryListReturn<T>;
export default useEntryList;

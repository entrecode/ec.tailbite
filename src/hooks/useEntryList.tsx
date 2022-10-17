import { filterOptions } from 'ec.sdk/lib/resources/ListResource';
import EntryList from 'ec.sdk/lib/resources/publicAPI/EntryList';
import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { useMemo } from 'react';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import useSdk from './useSdk';

export interface UseEntryListReturn<T = EntryResource> extends SWRResponse<EntryList, any> {
  count: number;
  total: number;
  items: Array<T> | undefined;
}
export interface UseEntryListProps {
  model: string | null; // given null, no request will go out
  filterOptions?: filterOptions;
  swrOptions?: SWRConfiguration<EntryList, any>; // TODO: add error typing
  filter?: (entry: EntryResource, i: number, entries: EntryResource[]) => boolean; // client side item filter to do stuff sdk filterOptions can't do, like remove entries that miss a certain prop
  edit?: (result: any) => any;
}

function chunk(arr: Array<any>, size: number): Array<Array<any>> {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
}

function useEntryList<T = EntryResource>(props: UseEntryListProps): UseEntryListReturn<T> {
  const { model, filterOptions = {}, swrOptions = { revalidateOnFocus: false }, filter, edit }: any = props;
  const { api } = useSdk();
  const res = useSWR<any>(
    model && api ? [api.shortID, 'sdk.entryList', model, filterOptions] : null,
    async () => {
      let res;
      // TODO remove if moved to ec.sdk
      if (filterOptions?.remoteID?.any?.length > 120) {
        res = {
          items: (
            await Promise.all(
              chunk(filterOptions.remoteID.any, 120).map((ids) =>
                api
                  ?.entryList(model, {
                    remoteID: {
                      any: ids,
                    },
                    _count: ids.length,
                  })
                  .then(({ items }) => items),
              ),
            )
          ).flat(),
        };
      }
      res = await api?.entryList(model, filterOptions);
      if (edit) {
        return edit(res);
      }
      return res;
    },
    swrOptions,
  );
  const items = useMemo(() => {
    const _items = res?.data?.items;
    if (filter) {
      return _items?.filter(filter);
    }
    return _items;
  }, [res?.data, filter]); // it's important to memo this!
  const { count, total } = res.data || {};
  if (res.error) {
    console.error('error in useEntryList', res.error);
  }
  return { count, items, total, ...res };
}

export default useEntryList;

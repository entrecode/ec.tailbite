import DMAssetList from 'ec.sdk/lib/resources/publicAPI/DMAssetList';
import useSdk from '../../hooks/useSdk';
import { laggySWR } from '../../util/laggySWR';
import useSWR from 'swr';

function useAssetList({
  group,
  page = 1,
  count = 12,
  laggy = true,
  filterOptions = {},
  sort,
}: {
  group: string;
  page?: number;
  count?: number;
  laggy?: boolean;
  sort?: [string] | string[];
  filterOptions?: {};
}) {
  const { api } = useSdk();
  const { data, ...rest } = useSWR<DMAssetList>(
    group ? [`asset/${group}`, page, filterOptions, sort] : null,
    () =>
      api!.dmAssetList(group, { page, ...(sort ? { sort } : {}), _count: count, ...filterOptions }).catch((err) => {
        console.error(err);
        throw err;
      }),
    {
      use: laggy ? [laggySWR] : [], // keep stale data on reload
      revalidateOnFocus: false,
    },
  );
  return {
    items: data?.items || [],
    data,
    ...rest,
  };
}

export default useAssetList;

import useSWR from 'swr';

function useAssetGroups(datamanager, options = {}, swrOptions = { revalidateOnFocus: false, dedupingInterval: 10000 }) {
  return useSWR(
    datamanager ? ['datamanager.asset', datamanager.dataManagerID, options] : null,
    () => datamanager.assetGroupList(options),
    swrOptions,
  );
}
export default useAssetGroups;

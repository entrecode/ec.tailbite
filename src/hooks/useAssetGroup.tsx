import useSWR from 'swr';
import { useDatamanagerResource } from './useDatamanager';

function useAssetGroup({ assetGroupID, swrOptions }: { assetGroupID: string; swrOptions?: any }) {
  const { data: dm } = useDatamanagerResource();
  return useSWR(
    dm && assetGroupID ? ['datamanager.assetGroup', dm.dataManagerID, assetGroupID] : null,
    () => dm!.assetGroup(assetGroupID),
    swrOptions,
  );
}
export default useAssetGroup;

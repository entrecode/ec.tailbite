import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
import useSWR, { SWRConfiguration } from 'swr';
import fileVariant from '../util/fileVariant';
import useSdk from './useSdk';

export interface UseAssetProps {
  group: string;
  assetID: string;
  size?: number;
  swrOptions?: SWRConfiguration<DMAssetResource, any>; // TODO: add error typing
}

function useAsset({ group, assetID, size, swrOptions }: UseAssetProps) {
  const { api } = useSdk();
  const res = useSWR<DMAssetResource>(
    api && group && assetID ? `asset/${group}/${assetID}` : null,
    () => api!.dmAsset(group, assetID),
    { revalidateOnFocus: false, ...(swrOptions || {}) },
  );
  return { ...res, src: res.data && size ? fileVariant(res.data, size) : null };
}

export default useAsset;

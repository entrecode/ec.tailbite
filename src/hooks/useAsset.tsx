import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
import useSWR from 'swr';
import fileVariant from '../util/fileVariant';
import useSdk from './useSdk';

function useAsset({ group, assetID, size }) {
  const { api } = useSdk();

  const res = useSWR<DMAssetResource>(
    api && group && assetID ? `asset/${group}/${assetID}` : null,
    () => api!.dmAsset(group, assetID),
    { revalidateOnFocus: false },
  );
  return { ...res, src: res.data && size ? fileVariant(res.data, size) : null };
}

export default useAsset;

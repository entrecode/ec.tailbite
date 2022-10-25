import { DataManager } from 'ec.sdk';
import useSWRImmutable from 'swr/immutable';
import { useTailbite } from '../components/Tailbite';
import useSdk from './useSdk';

function useDatamanager() {
  const environment = useTailbite();
  return useSWRImmutable(['DataManager', environment.env], () => new DataManager(environment.env));
}

export function useDatamanagerResource() {
  const { api } = useSdk();
  const { data: datamanager } = useDatamanager();
  return useSWRImmutable(api && datamanager ? ['DataManager', api.dataManagerID] : null, () =>
    datamanager!.dataManager(api!.dataManagerID),
  );
}

export default useDatamanager;

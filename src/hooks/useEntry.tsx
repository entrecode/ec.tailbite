import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import useSdk from './useSdk';

export interface UseEntryProps {
  model: string;
  id: string;
  swrOptions?: SWRConfiguration<EntryResource, any>; // TODO: add error typing
}

function useEntry(props: UseEntryProps): SWRResponse<EntryResource, any> {
  const { model, id, swrOptions } = props;
  const { api } = useSdk();
  return useSWR(api && model && id ? ['useEntry', model, id] : null, () => api!.entry(model, id), swrOptions);
}
export default useEntry;

import { useMemo } from 'react';
import useSWR, { SWRConfiguration } from 'swr';
import { request } from '../util/request';
import useSettings from './useSettings';

/* [markdown]
 * Returns [SWR request](https://swr.vercel.app/docs/options#return-values) to `settings.frontendUrl` (aka Frontend). Example: https://nightly.appsite.de/api/
 *
 */

export interface UseFrontendAPIProps {
  route?: string;
  swrOptions?: SWRConfiguration;
  sortBy?: string | ((a, b) => number);
}

function useFrontendAPI(props: UseFrontendAPIProps) {
  const { route = '', swrOptions = { revalidateOnFocus: false }, sortBy } = props;
  const { data: settings } = useSettings();
  const { data, ...rest } = useSWR(
    settings?.frontendUrl && route !== null ? `${settings?.frontendUrl}/${route}` : null,
    request,
    swrOptions,
  );
  const sorted = useMemo(() => {
    if (typeof sortBy === 'function') {
      return data?.sort(sortBy);
    } else if (typeof sortBy === 'string') {
      return data?.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }
    return data;
  }, [data, sortBy]);

  return { data: sorted, ...rest };
}

export default useFrontendAPI;

export const useText = () =>
  useFrontendAPI({
    route: 'api/text',
    swrOptions: { revalidateOnFocus: false },
  });

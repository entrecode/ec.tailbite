import { useMemo } from 'react';
import useSWR, { SWRConfiguration } from 'swr';
import { request } from '../util/request';
import useSettings from './useSettings';

/* [markdown]
 * Returns [SWR request](https://swr.vercel.app/docs/options#return-values) to `settings.appsiteUrl` (aka DSB Layer). Example: https://dsb-layer.cachena.entrecode.de/nightly
 *
 * Also exports [replacements for HectorService](https://github.com/entrecode/clubapp.admin/blob/aa601aebb70a9e6961c308b70c254f1bde40888f/src/react/hooks/useAppsite.tsx#L27) getters as sugar functions.
 * `settings.appsiteUrl` points to appsite's endpoint (/seoTitle) on the [DSB-Layer API](https://dsb-layer.cachena.entrecode.de/docs/), which is basically a [wrapper around the hector APIs](https://github.com/entrecode/hec.dsb-layer).
 *
 * Example:
 *
 * ```js
 * // sugar function for specific routes
 * const { data: clubs } = useClubs();
 * // root route (see useBackends)
 * const { data: appsiteRoot } = useAppsite({route:'');
 * // ,swrOptions: y hector route
 * const sortBy:{ data}: hectorClubs } = useAppsite({route:'config/clubs',swrOptions:
 * // conditional calling
 * sortBy:const { da}ta: hectorClubs } = useAppsite(shouldCall ? 'config/clubs' : null);
 * ```
 */

export interface UseAppsiteProps {
  route?: string;
  swrOptions?: SWRConfiguration;
  sortBy?: string | ((a, b) => number);
}

// TODO: use single param object instead of multiple params
// TODO: this is the same as useDSB, but without token..
function useAppsite(props: UseAppsiteProps) {
  const { route = '', swrOptions = { revalidateOnFocus: false }, sortBy } = props;
  const { data: settings } = useSettings();
  const { data, ...rest } = useSWR(
    settings?.appsiteUrl && route !== null ? `${settings?.appsiteUrl}/${route}` : null,
    request,
    swrOptions,
  );
  const sorted = useMemo(() => {
    if (typeof sortBy === 'function') {
      return data?.sort(sortBy);
    } else if (typeof sortBy === 'string') {
      return data?.sort((a, b) => a[sortBy]?.localeCompare(b[sortBy]));
    }
    return data;
  }, [data, sortBy]);

  return { data: sorted, ...rest };
}

export default useAppsite;

export const useRoles = () =>
  useAppsite({
    route: 'config/userRoles',
    swrOptions: { revalidateOnFocus: false },
    sortBy: (a, b) => a.localeCompare(b),
  });
export const useCourses = () =>
  useAppsite({ route: 'config/courses', swrOptions: { revalidateOnFocus: false }, sortBy: 'name' });
export const useClubs = () =>
  useAppsite({
    route: 'config/clubs',
    swrOptions: { revalidateOnFocus: false, dedupingInterval: 60000 },
    sortBy: 'name',
  });
export const useEmployees = () =>
  useAppsite({ route: 'config/employees', swrOptions: { revalidateOnFocus: false }, sortBy: 'surname' });
export const useCourseTypes = () =>
  useAppsite({ route: 'config/courseTypes', swrOptions: { revalidateOnFocus: false }, sortBy: 'name' });
export const useOnlineMembershipTemplates = () =>
  useAppsite({ route: 'config/onlineMembershipTemplates', swrOptions: { revalidateOnFocus: false }, sortBy: 'name' });
export const useVouchers = () =>
  useAppsite({ route: 'config/vouchers', swrOptions: { revalidateOnFocus: false }, sortBy: 'name' });
export const useAddons = () =>
  useAppsite({ route: 'config/addons?type=all', swrOptions: { revalidateOnFocus: false }, sortBy: 'name' });
export const useArticles = () =>
  useAppsite({ route: 'config/articles', swrOptions: { revalidateOnFocus: false }, sortBy: 'name' });
export const useContactCategories = () =>
  useAppsite({ route: 'config/contactCategories', swrOptions: { revalidateOnFocus: false }, sortBy: 'name' });

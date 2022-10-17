import { useCallback } from 'react';
import useSWR from 'swr';
import environment from '../environment';
import { request } from '../util/request';
import { withParams } from '../util/withParams';
import useSdk from './useSdk';

/* [markdown]
 * Hook for [Clubapp API](https://clubapp-api.cachena.entrecode.de), which abstracts away some appsite and live class logic.
 * Returns `get` `put` `post` `delete` + `swr`.
 *
 * Example:
 *
 * ```js
 * const { swr } = useClubappAPI();
 * const { data: appsites, error, isValidating, mutate } = swr('appsites');
 * ````
 */

const useClubappAPI = () => {
  const { token } = useSdk();
  const fetcher = useCallback(
    async (method, route, body?, headers = {}) => {
      const url = new URL(route, environment.clubappApiUrl).toString();
      return request(url, method, body, { authorization: `Bearer ${token}`, ...headers }).then(({ data }) => data);
    },
    [token],
  );

  const get = (route) => fetcher('get', route);
  const put = (route, body) => fetcher('put', route, body);
  const post = (route, body, headers?) => fetcher('post', route, body, headers);
  const del = (route, body, headers?) => fetcher('delete', route, body, headers);
  return {
    get,
    put,
    post,
    del,
    swr: (route, params?, swrOptions?) => useSWR(withParams(route, params), get, swrOptions),
  };
};

export default useClubappAPI;

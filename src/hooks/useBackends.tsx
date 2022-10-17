import { useEffect, useState } from 'react';
import useSWR, { SWRConfiguration } from 'swr';
import useAppsite from './useAppsite';

/** [markdown]
 * Abstracts Hector Backend handling. Returns:
 * | property | description |
 * | - | - |
 * | backends | object that maps backend ids to names, see `config.names` in [dsb layer root route](https://dsb-layer.cachena.entrecode.de/nightly) |
 * | backend | holds current selected backend, defaults to first in `backends` |
 * | setBackend | sets `backend`. Intended for usage with [BackendSelect](../components/BackendSelect.tsx) |
 * | useHectorAPI | [SWR hook](https://swr.vercel.app/) for current `backend` API, for direct hector access. |
 * | appsiteRoot | Root Response from [dsb layer root](https://dsb-layer.cachena.entrecode.de/nightly) |
 * | apiRoot | Root URL of current `backend`. Example: https://nightly-api.development.hectorts.de/ |
 * | error | swr error from appsiteRoot |
 * | apiRoute | get URL for given route in current `backend`. Example: https://nightly-api.development.hectorts.de/{route} |
 * | renderRoute | get URL for render route in current `backend`, with auth. Example: https://nightly-api.development.hectorts.de/render/#/login?accessToken={token}&returnUrl=/${route} |
 *
 * Example:
 *
 * ```js
 * const { useHectorAPI, apiRoot, backend, setBackend } = useBackends();
 * const { data: emails, mutate } = useHectorAPI('emailtemplates/api/emails');
 * ````
 */
function useBackends(backendProp?, autoselect = true) {
  const [backend, setBackend] = useState(backendProp) as any;
  const { data: appsiteRoot, error } = useAppsite({ route: '' }); // DSB Layer root
  const backends = appsiteRoot?.config?.names;
  useEffect(() => {
    if (backends && autoselect) {
      setBackend(Object.keys(backends)?.[0]);
    }
  }, [backends]);
  const getApiRoot = (backendId) =>
    appsiteRoot?.config?.apiUrls?.[backendId]?.replace(/^((\w+:)?\/\/[^/]+\/?).*$/, '$1');

  const apiRoot = getApiRoot(backend);
  const apiRoute = (route, backendId = backend) =>
    route ? (getApiRoot(backendId) ? `${getApiRoot(backendId)}${route}` : null) : null;
  const renderRoute = (route, token, backendId = backend) =>
    apiRoute(`render/#/login?accessToken=${token}&returnUrl=/${route}`, backendId);

  // this hook is dynamic, because it depends on apiRoot, which depends on the current backend
  const useHectorAPI = (route, swrSettings: SWRConfiguration<any> = { revalidateOnFocus: false }) =>
    useSWR(
      apiRoute(route),
      // using raw fetch instead of request because it won't work with content-type application/json
      (r) => fetch(r).then((res) => res.json()),
      swrSettings,
    );

  return {
    backends,
    backend,
    setBackend,
    useHectorAPI,
    appsiteRoot,
    apiRoot,
    error,
    apiRoute,
    renderRoute,
  };
}

export default useBackends;

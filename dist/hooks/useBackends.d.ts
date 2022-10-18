import { SWRConfiguration } from 'swr';
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
declare function useBackends(backendProp?: any, autoselect?: boolean): {
    backends: any;
    backend: any;
    setBackend: any;
    useHectorAPI: (route: any, swrSettings?: SWRConfiguration<any>) => import("swr").SWRResponse<any, any>;
    appsiteRoot: any;
    apiRoot: any;
    error: any;
    apiRoute: (route: any, backendId?: any) => string | null;
    renderRoute: (route: any, token: any, backendId?: any) => string | null;
};
export default useBackends;

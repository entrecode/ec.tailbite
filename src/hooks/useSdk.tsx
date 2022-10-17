import { PublicAPI, Session } from 'ec.sdk';
import { environment as Environment, options as Options } from 'ec.sdk/lib/Core';
import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import environment from '../environment';
import useAccounts from './useAccounts';

export interface UsePublicAPIProps {
  shortID: string;
  env?: Options | Environment;
  swrOptions?: any;
}

export function usePublicAPI(props: UsePublicAPIProps) {
  const { shortID, env, swrOptions } = props;
  const res = useSWRImmutable(
    shortID ? [shortID, env] : null,
    () => new PublicAPI(shortID, env, true).resolve(),
    swrOptions,
  );
  useEffect(() => {
    res.error && console.error('error resolving PublicAPI', res.error);
  }, [res.error]);
  /* useEffect(() => {
    res.data && console.log('PublicAPI resolved', res.data);
  }, [res.data]); */
  return res;
}

/* export const PublicAPIProvider = (props: any) => {
  const { children, shortID, env = environment.env } = props;
  const { data: api } = usePublicAPI({ shortID, env });
  return <PublicAPIContext.Provider value={api}>{children}</PublicAPIContext.Provider>;
}; */

export function useSession() {
  const res = useSWRImmutable(['Session', environment.env], () => {
    const session = new Session(environment.env);
    session.setClientID('rest');
    return session;
  });
  const token = res.data?.getToken();
  return { ...res, token };
}

/* [markdown]
 * Exposes current sdk PublicAPI instance (.api) + legacy angular sdk (.sdk) instance.
 * ```js
 * const { api } = useSdk();
 * ```
 */
function useSdk() {
  const { pathname } = useLocation(); // make sure useSdk is always called inside BrowserRouter
  const shortID = pathname?.split('/')?.[1]?.match(/^[a-f0-9]{8}$/i) ? pathname.split('/')[1] : '';

  const { data: api, error } = usePublicAPI({
    shortID,
    env: environment.env,
    swrOptions: {
      retryOnError: false,
      onError: (err) => {
        console.warn(`error loading public api with shortID "${shortID}"`, err);
      },
    },
  });

  const apiResolved = !!api;
  const { data: accounts } = useAccounts();
  const { data: session, mutate, token } = useSession();
  const updateSession = useCallback(
    () => async () => {
      if (session) {
        await mutate();
      }
    },
    [session],
  );
  return { api, token, apiResolved, accounts, session, updateSession };
}

export default useSdk;

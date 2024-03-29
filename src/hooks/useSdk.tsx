import { PublicAPI, Session } from 'ec.sdk';
import { environment as Environment, options as Options } from 'ec.sdk/lib/Core';
import { useCallback, useEffect } from 'react';
import useSWRImmutable from 'swr/immutable';
import { useTailbite } from '../components/Tailbite';
import useAccounts from './useAccounts';

export interface UsePublicAPIProps {
  shortID: string | null;
  env?: Options | Environment;
  swrOptions?: any;
}

export function usePublicAPI(props: UsePublicAPIProps) {
  const { shortID, env, swrOptions } = props;
  const res = useSWRImmutable(
    shortID ? [shortID, env] : null,
    () => new PublicAPI(shortID!, env, true).resolve(),
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

export function useSession() {
  const environment = useTailbite();
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
  const { env, shortID = null } = useTailbite();

  const { data: api } = usePublicAPI({
    shortID,
    env,
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

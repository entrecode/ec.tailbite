import { Accounts } from 'ec.sdk';
import useSWRImmutable from 'swr/immutable';
import { useTailbite } from '../components/Tailbite';

function useAccounts() {
  const environment = useTailbite();
  return useSWRImmutable(environment ? ['Accounts', environment.env] : null, () => new Accounts(environment.env));
}

export default useAccounts;

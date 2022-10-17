import { Accounts } from 'ec.sdk';
import useSWRImmutable from 'swr/immutable';
import environment from '../environment';

function useAccounts() {
  return useSWRImmutable(['Accounts', environment.env], () => new Accounts(environment.env));
}

export default useAccounts;

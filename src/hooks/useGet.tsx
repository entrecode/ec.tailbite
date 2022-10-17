import useSWR from 'swr';
import { request } from '../util/request';
import useSdk from './useSdk';

function useGet(url: string, withToken?: boolean, headers?: any) {
  const { token } = useSdk();
  headers = withToken ? { authorization: `Bearer ${token}`, ...headers } : headers;
  return useSWR(url, () => request(url ? url : null, 'GET', null, headers));
}

export default useGet;

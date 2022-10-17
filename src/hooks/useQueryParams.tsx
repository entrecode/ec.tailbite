import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

function useQueryParams(): [{ [key: string]: string }, (params: { [key: string]: string }) => void] {
  let [params, setParams] = useSearchParams();
  return [useMemo(() => Object.fromEntries(Array.from(params)), [params]), setParams];
}

export default useQueryParams;

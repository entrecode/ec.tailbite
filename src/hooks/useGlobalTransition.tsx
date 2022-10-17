import { useTransition } from 'react';

function useGlobalTransition() {
  const [isPending, startTransition] = useTransition();
  // TODO: show global loader with isPending
  return startTransition;
}

export default useGlobalTransition;

import { useState, useEffect, useRef } from 'react';

function useTimeoutFlag(ms = 1000): [boolean | undefined, () => void] {
  const [toggle, setToggle] = useState<boolean | undefined>(undefined);
  const timeout = useRef<any>(null);
  useEffect(() => {
    return clearTimeout(timeout.current);
  }, []);
  const trigger = () => {
    setToggle(true);
    timeout.current = setTimeout(() => {
      setToggle(false);
    }, ms);
  };
  return [toggle, trigger];
}
export default useTimeoutFlag;

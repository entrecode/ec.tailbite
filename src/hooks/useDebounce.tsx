import { useState, useEffect } from 'react';

// https://github.com/vercel/swr/issues/110#issuecomment-552637429
export default function useDebounce(value, delay, onChange?) {
  // make sure onChange is wrapped in useCallback!
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      onChange?.(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, onChange]);

  return debouncedValue;
}

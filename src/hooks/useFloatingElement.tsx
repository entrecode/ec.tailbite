import { useRef, useState } from 'react';
import useClickOutside from './useClickOutside';

function useFloatingElement(ref, defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);
  useClickOutside(ref, () => setOpen(false));
  return { open, setOpen };
}

export default useFloatingElement;

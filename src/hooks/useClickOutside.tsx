import useDocumentClick from './useDocumentClick';

function useClickOutside(ref, func) {
  useDocumentClick((e) => {
    if (e.target !== ref.current && !ref.current.contains(e.target)) {
      func(e);
    }
  });
}

export default useClickOutside;

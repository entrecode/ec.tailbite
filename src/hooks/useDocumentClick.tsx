import { useLayoutEffect } from 'react';

const useDocumentClick = (handleClick) => {
  useLayoutEffect(() => {
    document.addEventListener('click', handleClick, { capture: true });
    // https://github.com/facebook/react/issues/20325#issuecomment-732707240
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, [handleClick]);
};

export default useDocumentClick;

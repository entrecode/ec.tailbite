import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const AngularContext = React.createContext(null);

export const useAngular = () => {
  const navigate = useNavigate();
  return {
    router: useMemo(
      () => ({
        navigate: (...args) => {
          const [path] = args;
          console.warn('TODO refactor? router.navigate', args);
          navigate(`/${path.join('/')}`);
        },
      }),
      [],
    ),
    // TODO:
    sdk: {} as any,
  };
};

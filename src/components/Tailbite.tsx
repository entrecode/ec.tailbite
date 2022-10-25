import React, { createContext, useContext } from 'react';

declare interface TailbiteEnvironment {
  env: 'live' | 'stage';
  shortID: string;
  accountServerUrl?: string; // see PasswortReset
  clubappApiUrl?: string; // see useClubappAPI
}

export const TailbiteEnvironmentContext = createContext<TailbiteEnvironment>({ env: 'stage', shortID: 'MISSING' });

function Tailbite({ children, environment }: React.PropsWithChildren<{ environment: TailbiteEnvironment }>) {
  if (!environment) {
    console.error('no environment passed to Tailbite component');
    return <></>;
  }
  return <TailbiteEnvironmentContext.Provider value={environment}>{children}</TailbiteEnvironmentContext.Provider>;
}

export function useTailbite() {
  return useContext(TailbiteEnvironmentContext);
}

export default Tailbite;

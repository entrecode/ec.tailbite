import React from 'react';
import Spinner from './Spinner';

// TODO: Speichern button uses this for an inline loader..

export function LocalLoader() {
  // useGlobalTransition
  return (
    <div className="w-screen fixed top-0 left-0 h-screen flex justify-center items-center z-[50]">
      <Spinner className="w-16 h-16" />
    </div>
  );
}

export default LocalLoader;

import React from 'react';
import LocalLoader from './LocalLoader';

// just make sure this is inside a className="relative" section

//  bg-gray-200 dark:bg-gray-500 bg-opacity-20 dark:bg-opacity-20
function SectionLoader({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute top-0 left-0 w-full h-full ${className || ''}`}>
      <div className="absolute p-2 top-0 left-0">
        <LocalLoader />
      </div>
    </div>
  );
}

export default SectionLoader;

import React, { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren<{ top?: any; left?: any; right?: any }>> = ({ top, left, right, children }) => {
  return (
    <div className="flex flex-col h-screen">
      {top && (
        <div className="flex-none h-16 items-center flex shadow-md p-1 z-[10] border-gray-300 dark:border-gray-700 border-b">
          {top}
        </div>
      )}
      <div className="flex grow overflow-hidden z-[11] ">
        {left && (
          <div className="overflow-auto h-full bg-base border-r border-gray-300 dark:border-gray-700 shadow-lg">
            {left}
          </div>
        )}
        <div className="grow h-full overflow-auto">{children}</div>
        {right && (
          <div className="overflow-auto h-full bg-base border-r border-gray-300 dark:border-gray-700 shadow-lg">
            {right}
          </div>
        )}
      </div>
    </div>
  );
};
export default Layout;

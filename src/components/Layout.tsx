import React, { FC, PropsWithChildren } from 'react';
import cx from '@/util/classNames';

const Layout: FC<PropsWithChildren<any>> = ({ top, left, right, children, topClass, leftClass, rightClass }) => {
  return (
    <div className="flex flex-col h-screen">
      {top && (
        <div
          className={cx(
            'flex-none h-16 items-center flex shadow-md p-1 z-[12] border-gray-300 dark:border-gray-700 border-b',
            topClass,
          )}
        >
          {top}
        </div>
      )}
      <div className="flex grow overflow-hidden z-[11] ">
        {left && (
          <div className={cx('h-full bg-base border-r border-gray-300 dark:border-gray-700 shadow-lg', leftClass)}>
            {left}
          </div>
        )}
        <div className="grow h-full overflow-auto">{children}</div>
        {right && (
          <div className={cx('h-full bg-base border-r border-gray-300 dark:border-gray-700 shadow-lg', rightClass)}>
            {right}
          </div>
        )}
      </div>
    </div>
  );
};
export default Layout;

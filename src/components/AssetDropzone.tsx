import React from 'react';
import { classNames } from '../util/classNames';
import Dropzone from './Dropzone';

export const border =
  'border border border-gray-600 dark:border-gray-500 p-4 rounded-md flex justify-center items-center';

// TODO: Storybook?

export function AssetDropzone({ children, onDrop }: any) {
  return (
    <Dropzone onDrop={onDrop}>
      {({ drop, isActive }) => (
        <div className="relative" ref={drop}>
          {typeof children === 'function' ? children({ isActive }) : children}

          {isActive && (
            <div className={classNames(border, 'absolute top-0 left-0 w-full h-full bg-primary bg-opacity-50')}>
              Loslassen zum Hochladen!
            </div>
          )}
        </div>
      )}
    </Dropzone>
  );
}

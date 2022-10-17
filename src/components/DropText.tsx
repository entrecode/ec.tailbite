import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { classNames } from '../util/classNames';
import Dropzone from './Dropzone';

export default function DropText({ onChange, children }) {
  return (
    <Dropzone
      onDrop={async (e) => {
        // e.preventDefault();
        const text = await e.files[0].text();
        onChange?.(text);
      }}
    >
      {({ isActive, drop }) => (
        <div ref={drop} className={classNames('relative')}>
          {children}
          {isActive && (
            <div className="absolute top-0 w-full h-full bg-green-500 bg-opacity-50 p-2">
              <div className="border-2 border-dashed border-white w-full h-full rounded-lg flex justify-center items-center text-lg">
                <span className="bg-gray-300 dark:bg-gray-800 p-4 rounded-full text flex space-x-2 items-center">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  <span>Loslassen zum Einfügen</span>
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </Dropzone>
  );
}

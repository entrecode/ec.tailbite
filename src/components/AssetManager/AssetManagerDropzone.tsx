import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { AssetDropzone } from '../../components/AssetDropzone';

function AssetManagerDropzone({ onDrop }) {
  return (
    <AssetDropzone onDrop={onDrop}>
      <div className="bg-white dark:bg-gray-600 border border-dashed border-gray-400 dark:border-gray-400 flex flex-col space-y-4 items-center py-4 rounded-md text-gray-500 dark:text-gray-300">
        <CloudArrowUpIcon className="w-8 h-8" />
        <div className="flex flex-col space-y-1 text-center">
          <strong>Klick um eine neue Datei hochzuladen</strong>
          <span>oder lege eine Datei auf dieser Fläche ab</span>
        </div>
      </div>
    </AssetDropzone>
  );
}
export default AssetManagerDropzone;

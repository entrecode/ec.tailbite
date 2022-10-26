import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import DMAssetList from 'ec.sdk/lib/resources/publicAPI/DMAssetList';
import React, { useState } from 'react';
import useSWR from 'swr';
import useSdk from '../hooks/useSdk';
import AssetPickerModal from './AssetManager/AssetPickerModal';
import { uploadAssets } from '../util/assets';
import fileVariant from '../util/fileVariant';
import { AssetDropzone } from './AssetDropzone';
import Img from './Img';
import Ink from './Ink';
import LocalLoader from './LocalLoader';
import Tailbite from './Tailbite';

// TODO: storybook?

export default function AssetPickerMulti(props: {
  group: string;
  // solo: true;
  value: string[];
  onChange: (value: string[] | null) => void;
  children?: any; // React.ReactNode | () => any;
}) {
  const { value, group, onChange, children } = props;
  const { api } = useSdk();
  const [open, setOpen] = useState(false);
  const [currentlyUploading, setCurrentlyUploading] = useState<string[]>([]);
  const { data: selectedAssets, isValidating } = useSWR<DMAssetList>(
    value?.length && group ? `assets/${group}/${value.join(',')}` : null,
    () => api!.dmAssetList(group, { assetID: { any: value } }),
    {
      // use: [laggySWR], // keep stale data on reload
      revalidateOnFocus: false,
    },
  );
  // const selectedAssets = value?.length ? loadedAssets : { items: [] }; // needed only when laggySWR is used
  return (
    <>
      <AssetDropzone
        onDrop={async ({ files }) => {
          setCurrentlyUploading(files);
          const assets = await uploadAssets(api, group, files);
          onChange?.([...(value || []), ...assets.map((asset) => asset.assetID)]);
          setCurrentlyUploading([]);
        }}
      >
        {children && typeof children === 'function' ? (
          children({ selectedAssets, currentlyUploadedFiles: currentlyUploading, setOpen, value })
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {currentlyUploading?.map((file: any, i) => (
              <div key={i} className="bg-gray-500 rounded-md p-0 aspect-[4/3] overflow-hidden relative group">
                <div className="overflow-hidden relative p-4 text-sm">Upload: {file.name}</div>
              </div>
            ))}
            {selectedAssets?.items?.map((asset) => (
              <div
                key={asset.assetID}
                className="bg-gray-500 rounded-md p-0 aspect-[4/3] overflow-hidden relative group"
              >
                <Img src={fileVariant(asset, 400)} className="h-full" />
                <div className="absolute top-2 right-2 space-y-2 group-hover:opacity-100 opacity-0">
                  <Ink.Error onClick={() => onChange(null)} className="cursor-pointer">
                    <TrashIcon className="w-6 h-6 bg-gray-800 p-1 rounded-md" />
                  </Ink.Error>
                </div>
              </div>
            ))}
            {!currentlyUploading.length && (
              <div className="bg-gray-500 rounded-md p-0 aspect-[4/3] overflow-hidden relative">
                <div className="flex h-full justify-center items-center cursor-pointer" onClick={() => setOpen(true)}>
                  <div className="flex gap-2">
                    <PencilIcon className="w-4 h-4" />
                    <span className="text-sm">Bilder bearbeiten</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </AssetDropzone>
      {isValidating && <LocalLoader />}
      <AssetPickerModal
        assetGroupID={group}
        open={open}
        onClose={() => setOpen(false)}
        onChange={(items) => onChange?.(items)}
        value={value}
      />
    </>
  );
}

export function AssetPickerMultiExample() {
  const [assets, setAssets] = useState<any>([]);
  return (
    <Tailbite environment={{ shortID: '83cc6374', env: 'stage' }}>
      <AssetPickerMulti group="test" value={assets} onChange={setAssets} />
    </Tailbite>
  );
}

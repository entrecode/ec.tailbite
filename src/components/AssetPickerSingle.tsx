import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid';
import DMAssetList from 'ec.sdk/lib/resources/publicAPI/DMAssetList';
import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
import React, { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import useNotifications from '../hooks/useNotifications';
import useSdk from '../hooks/useSdk';
import AssetPickerModal from './AssetManager/AssetPickerModal';
import { uploadAssets } from '../util/assets';
import fileVariant from '../util/fileVariant';
import { AssetDropzone } from './AssetDropzone';
import Img from './Img';
import Ink from './Ink';
import Tailbite from './Tailbite';

// TODO: storybook?

export default function AssetPickerSingle(props: any) {
  const { value, group, onChange, children } = props;
  const { api } = useSdk();
  const [open, setOpen] = useState(false);
  const [currentlyUploadedFile, setCurrentlyUploadedFile] = useState<any>();
  const notifications = useNotifications();
  const { data: selectedAsset } = useSWR<DMAssetList | DMAssetResource>(
    group && value ? `asset/${group}/${value}` : null,
    () => api!.dmAsset(group, value),
    { revalidateOnFocus: false },
  );
  const handleClick = useCallback(() => setOpen(true), []);
  const handleRemove = useCallback(
    (e) => {
      e.stopPropagation();
      onChange?.(null);
    },
    [onChange],
  );
  const source = useMemo(() => (selectedAsset ? fileVariant(selectedAsset, 400) : undefined), [selectedAsset]);

  const galleryImage = useMemo(() => {
    return <Img src={source} className="h-full" />; //  title={title}
  }, [source, selectedAsset?.title, handleClick, handleRemove, selectedAsset?.file, currentlyUploadedFile]);

  const selection = (
    <div className="max-w-[200px]">
      <div className="bg-gray-200 dark:bg-gray-800 rounded-md p-0 aspect-[4/3] overflow-hidden relative group">
        {!!selectedAsset?.file && !currentlyUploadedFile && (
          <>
            {galleryImage}
            <div className="absolute top-2 right-2 space-y-2 group-hover:opacity-100 opacity-0">
              <Ink.Primary onClick={() => setOpen(true)} className="cursor-pointer">
                <PencilIcon className="w-6 h-6 bg-gray-800 p-1 rounded-md" />
              </Ink.Primary>
              <Ink.Error onClick={() => onChange(null)} className="cursor-pointer">
                <TrashIcon className="mt-1 w-6 h-6 bg-gray-800 p-1 rounded-md" />
              </Ink.Error>
            </div>
          </>
        )}
        {!value?.length && !currentlyUploadedFile && (
          <div className="flex h-full justify-center items-center cursor-pointer" onClick={() => setOpen(true)}>
            <div className="flex gap-2">
              <PlusIcon className="w-5 h-5" />
              <span className="text-sm">Bild hinzufügen</span>
            </div>
          </div>
        )}
        {currentlyUploadedFile && (
          <div className="overflow-hidden relative p-4 text-sm">Upload: {currentlyUploadedFile?.name}</div>
        )}
      </div>
    </div>
  );
  return (
    <>
      <AssetDropzone
        onDrop={async ({ files }) => {
          if (files.length > 1) {
            alert('Bitte nur eine Datei');
            return;
          }
          try {
            setCurrentlyUploadedFile(files[0]);
            const assets = await uploadAssets(api, group, files, { ignoreDuplicates: true });
            onChange?.(assets?.[0]?.assetID);
            setCurrentlyUploadedFile(null);
            notifications.emit({
              type: 'success',
              title: 'Datei hochgeladen!',
            });
          } catch (error) {
            notifications.emit({
              type: 'error',
              title: 'Fehler beim Hochladen',
            });
          }
        }}
      >
        {children && typeof children === 'function'
          ? children({ selectedAsset, currentlyUploadedFile, setOpen, value, Selection: selection })
          : selection}
      </AssetDropzone>
      <AssetPickerModal
        assetGroupID={group}
        open={open}
        onClose={() => setOpen(false)}
        onChange={(items) => onChange?.(items[0])}
        value={[value]}
        solo
      />
    </>
  );
}

export function AssetPickerSingleExample() {
  const [asset, setAsset] = useState();
  return (
    <Tailbite environment={{ shortID: '83cc6374', env: 'stage' }}>
      <AssetPickerSingle group="test" value={asset} onChange={setAsset} />
    </Tailbite>
  );
}

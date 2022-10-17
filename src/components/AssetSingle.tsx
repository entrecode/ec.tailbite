import DMAssetList from 'ec.sdk/lib/resources/publicAPI/DMAssetList';
import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
import PublicAssetResource from 'ec.sdk/lib/resources/publicAPI/PublicAssetResource';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import useNotifications from '../hooks/useNotifications';
import useSdk from '../hooks/useSdk';
import { uploadAssets } from '../util/assets';
import { AssetDropzone } from './AssetDropzone';
import FileUpload from './FileUpload';

export function AssetSingle(props: {
  group: string;
  value: DMAssetResource;
  onChange: (item: PublicAssetResource) => void;
}) {
  const notifications = useNotifications();
  const { value, group, onChange } = props;
  const [currentlyUploading, setCurrentlyUploading] = useState<string[]>([]);
  const { api } = useSdk();

  const { data: selectedAsset, mutate } = useSWR<DMAssetList | DMAssetResource>(
    group && value ? `asset/${group}/${value}` : null,
    () => api!.dmAsset(group, value.assetID),
    { revalidateOnFocus: false },
  );

  useEffect(() => {
    mutate();
  }, [value]);

  async function onDrop({ files }) {
    if (files.length > 1) {
      notifications.emit({
        type: 'error',
        title: 'Bitte nur eine Datei',
      });
      return;
    }
    setCurrentlyUploading(files);
    try {
      const assets = await uploadAssets(api, group, files, { deduplicate: true });
      onChange(assets[0]);
      notifications.emit({
        type: 'success',
        title: `Bild erfolgreich hochgeladen.`,
      });
    } catch (e: any) {
      notifications.emit({
        type: 'error',
        title: 'Fehler beim hochladen der Datei',
        message: e.message,
      });
    }
    setCurrentlyUploading([]);
  }

  return (
    <AssetDropzone onDrop={onDrop}>
      {({ isActive }) => (
        <>
          <FileUpload
            onChange={(e: FileList) => {
              onDrop({ files: [e.item(0)] });
            }}
            isActive={isActive}
            file={selectedAsset}
            currentlyUploading={currentlyUploading}
          />
        </>
      )}
    </AssetDropzone>
  );
}

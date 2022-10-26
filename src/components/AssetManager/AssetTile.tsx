import { DocumentIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import AssetGroupResource from 'ec.sdk/lib/resources/datamanager/AssetGroupResource';
import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
import React, { useMemo } from 'react';
import Ink from '../../components/Ink';
import Spinner from '../../components/Spinner';
import { useDatamanagerResource } from '../../hooks/useDatamanager';
import { classNames } from '../../util/classNames';
import snip from '../../util/snip';
import { getType, getVariant } from './assetUtil';

const getTypeIcon = (mimetype) => {
  const [base, type] = mimetype.split('/');
  const baseIcon = {
    video: VideoCameraIcon,
    text: DocumentIcon,
  }[base];
  if (baseIcon) {
    return baseIcon;
  }
  const typeIcon = {
    pdf: DocumentIcon,
    svg: PhotoIcon,
  }[type];
  if (typeIcon) {
    return typeIcon;
  }
  return;
};

function AssetTile({
  asset,
  group,
  size = 200,
  onClick,
  className,
  label = snip(asset.title, 20),
  selected,
}: {
  asset: DMAssetResource | any;
  group?: AssetGroupResource;
  size?: number;
  label?: string;
  className?: string;
  selected?: boolean;
  onClick?: (asset: DMAssetResource) => any;
}) {
  const { data: dm } = useDatamanagerResource();
  const url = useMemo(
    () => (asset && !asset.upload && group && dm ? getVariant(asset, size, false, group, dm) : null),
    [asset, group, dm],
  );
  const tileClass = 'aspect-w-1 aspect-h-1 bg-white dark:bg-gray-600  shadow-lg rounded-lg overflow-hidden';
  if (asset.upload) {
    const type = getType(asset.upload.type);
    const url = URL.createObjectURL(asset.upload);
    return (
      <div>
        <div className={tileClass + ' relative'}>
          {type === 'image' ? (
            <img className="object-cover" src={url} />
          ) : (
            <div className="flex justify-center items-center">upload</div>
          )}
          <div className="flex items-center justify-center w-full h-full">
            <Spinner className="w-16 h-16" />
          </div>
        </div>
        {label && (
          <Ink.Light className="text-sm mt-2 block" title={asset.title}>
            {label}
          </Ink.Light>
        )}
      </div>
    );
  }
  const type = getType(asset.mimetype);
  const TypeIcon = getTypeIcon(asset.mimetype);

  return (
    <div className={classNames(className, onClick ? 'group cursor-pointer' : '')} onClick={() => onClick?.(asset)}>
      <div
        className={classNames(
          tileClass,
          onClick && 'group-hover:opacity-50',
          selected && 'outline outline-offset-2 outline-4 outline-primary',
        )}
      >
        {type === 'image' /* && asset.mimetype !== 'image/svg' */ ? (
          <img className="object-cover" src={url} />
        ) : (
          <div className="flex justify-center items-center">
            {TypeIcon ? <TypeIcon className="w-12 h-12" /> : <>{asset.mimetype}</>}
          </div>
        )}
      </div>
      {label && (
        <Ink.Light className="text-sm mt-2 block" title={asset.title}>
          {label}
        </Ink.Light>
      )}
    </div>
  );
}
export default AssetTile;

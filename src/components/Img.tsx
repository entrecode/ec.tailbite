import { ArrowUpTrayIcon, PhotoIcon } from '@heroicons/react/24/outline';
import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
import React, { useEffect, useMemo, useState } from 'react';
import { classNames } from '../util/classNames';
import fileVariant from '../util/fileVariant';
import LocalLoader from './LocalLoader';

/**
 * Renders an image with a loading indicator.
 */
const Img = (props: {
  src?: string;
  alt?: string;
  className?: string;
  clickable?: boolean;
  title?: string;
  style?: {};
}) => {
  const { src, style = {}, title, className = '', clickable = false } = props;
  const [pending, setPending] = useState(!src);
  useEffect(() => {}, []);
  const image = useMemo(
    () => (
      <img
        src={src}
        alt={title}
        loading="lazy"
        className={classNames(
          'max-w-full max-h-full object-center object-contain',
          clickable ? 'group-hover:opacity-75 cursor-pointer' : '',
          pending ? 'opacity-25' : '',
        )}
        onLoad={() => setPending(false)}
      />
    ),
    [src, title],
  );
  return (
    <div
      className={classNames(
        'group overflow-hidden relative flex bg-gray-200 dark:bg-gray-600 justify-center items-center',
        className,
      )}
      style={style}
    >
      {image}
      {pending && <LocalLoader />}
    </div>
  );
};

export declare interface ImgAssetProps {
  asset: DMAssetResource;
  size?: number;
  width?: number;
  height?: number;
  onClick?: (e: any) => void;
  className?: string;
}

/**
 * Renders an DMAssetResource as an Image
 */

Img.Asset = ({ asset, size = 64, width = size, height = size, onClick }: ImgAssetProps) => {
  const dimensions = { width, height };
  return (
    <div className={onClick ? 'cursor-pointer' : ''} onClick={(e) => onClick?.(e)}>
      {asset ? (
        <Img src={fileVariant(asset, size)} className="rounded-lg" style={dimensions} clickable={!!onClick} />
      ) : (
        <div
          style={dimensions}
          className={classNames('flex justify-center items-center', onClick ? 'hover:opacity-75' : '')}
        >
          {onClick ? <ArrowUpTrayIcon className="w-8 h-8" /> : <PhotoIcon className="w-8 h-8" />}
        </div>
      )}
    </div>
  );
};

export default Img;

import { CheckIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import CopyLink from '../../components/CopyLink';
import ExternalLink from '../../components/ExternalLink';
import Form from '../../components/Form';
import Ink from '../../components/Ink';
import Input from '../../components/Input';
import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';
import { TagsInput } from '../../components/TagsPicker';
import { useDatamanagerResource } from '../../hooks/useDatamanager';
import AssetTile from './AssetTile';
import { getAllVariants } from './assetUtil';

function AssetSidebar({ asset, group, onClose, onSubmit }) {
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  useEffect(() => {
    if (asset) {
      let { title, tags, caption } = asset;
      reset({ title, caption, tags });
    }
  }, [asset]);
  const { data: dm } = useDatamanagerResource();
  const { fileVariants, thumbnails } = useMemo(() => {
    if (!asset || !group || !dm) {
      return {};
    }
    return {
      fileVariants: getAllVariants(asset, false, group, dm),
      thumbnails: getAllVariants(asset, true, group, dm),
    };
  }, [asset, group, dm]);

  return (
    <Sidebar open={!!asset} onClose={() => onClose?.(null)}>
      {asset && (
        <>
          <Sidebar.Head>
            <Sidebar.Heading>{asset?.title}</Sidebar.Heading>
            <Sidebar.X />
          </Sidebar.Head>
          <Sidebar.Body>
            <div className="grid grid-cols-2 gap-4">
              <AssetTile asset={asset} size={600} label="" group={group} />
              <div className="flex flex-col space-y-1">
                {thumbnails?.map((thumbnail, i) => (
                  <ExternalLink href={thumbnail.url} key={i}>
                    Thumbnail {thumbnail.size}
                    {thumbnail.generated && <CheckIcon className="w-5 h-5" />}
                  </ExternalLink>
                ))}
                {fileVariants?.map((variant, i) => (
                  <ExternalLink href={variant.url} key={i}>
                    Variante {variant.size}
                    {variant.generated && <CheckIcon className="w-5 h-5" />}
                  </ExternalLink>
                ))}
                <ExternalLink href={asset.file.url}>
                  Original{' '}
                  {asset.file.resolution ? Math.max(asset.file.resolution.width, asset.file.resolution.height) : ''}{' '}
                  <CheckIcon className="w-5 h-5" />
                </ExternalLink>
              </div>
            </div>
            <div className="my-4">
              <Ink.Secondary>
                {friendlyBytes(asset.file.size)} | Typ: {asset.mimetype.split('/')?.[1]} | Duplikate: {asset.duplicates}{' '}
                | ID: <CopyLink value={asset.assetID}>{asset.assetID}</CopyLink>
              </Ink.Secondary>
            </div>
            <Form $dense>
              <Form.Item>
                <Form.Item.Label>Titel</Form.Item.Label>
                <Form.Item.Body>
                  <Input type="text" {...register('title')} />
                </Form.Item.Body>
              </Form.Item>
              <Form.Item>
                <Form.Item.Label>Alt</Form.Item.Label>
                <Form.Item.Body>
                  <Input type="text" {...register('caption')} />
                </Form.Item.Body>
              </Form.Item>
              <Form.Item>
                <Form.Item.Label>Tags auswählen</Form.Item.Label>
                <Form.Item.Body>
                  <TagsInput
                    control={control}
                    name="tags"
                  />
                </Form.Item.Body>
              </Form.Item>
              <div className="flex space-x-2 justify-end">
                <Button $empty onClick={() => onClose?.()}>
                  Abbrechen
                </Button>
                <Button
                  $primary
                  onClick={handleSubmit(async (values) => {
                    if (isSubmitting) {
                      return;
                    }
                    try {
                      Object.assign(asset, values);
                      await asset.save();
                      onClose?.();
                      onSubmit?.(asset);
                    } catch (err) {
                      console.error(err);
                    }
                  })}
                >
                  Speichern {isSubmitting && <Spinner className="ml-2 w-5 h-5" />}
                </Button>
              </div>
            </Form>
          </Sidebar.Body>
        </>
      )}
    </Sidebar>
  );
}

export function friendlyBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let i = 0;
  while (bytes >= 1024) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(1)} ${units[i]}`;
}

export default AssetSidebar;

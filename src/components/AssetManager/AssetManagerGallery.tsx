import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { confirmWithModal } from '../../components/ConfirmModal';
import Input from '../../components/Input';
import LocalLoader from '../../components/LocalLoader';
import { Pagination } from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import Table, { hover } from '../../components/Table';
import useNotifications from '../../hooks/useNotifications';
import useSdk from '../../hooks/useSdk';
import { uploadAssets } from '../../util/assets';
import { classNames } from '../../util/classNames';
import snip from '../../util/snip';
import AssetManagerDropzone from './AssetManagerDropzone';
import { friendlyBytes } from './AssetSidebar';
import AssetTile from './AssetTile';
import { bulkDeleteAssets } from './assetUtil';

function AssetManagerGallery({ onClickAsset, manager }: { onClickAsset: any; manager: any }) {
  const { selection, group, query, type, view, page, setPage } = manager;
  const notifications = useNotifications();
  const { api } = useSdk();
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    setPage(1);
    // selection.clear();
  }, [group, type, query]);
  const count = 12;
  const {
    list: { items: assets, data: assetList, error, mutate },
  } = manager;
  const isLoading = !assetList && !error;
  const isEmpty = !error && assetList && assets?.length === 0;
  const handleDrop = async ({ files }) => {
    mutate(
      (data) =>
        ({
          ...data,
          items: [...files.map((file) => ({ upload: file })), ...data.items].slice(0, count),
        } as any),
      false,
    );
    try {
      await uploadAssets(api, group.assetGroupID, files, { ignoreDuplicates: true });
      notifications.emit({
        type: 'success',
        title: `Erfolgreich hochgeladen.`,
      });
    } catch (err: any) {
      notifications.emit({
        type: 'error',
        title: `Fehler beim Hochladen`,
        message: err.message,
      });
      console.log('alram', err);
    }
    await mutate();
  };

  const handleBulkDelete = async () => {
    if (deleting || !(await confirmWithModal('Wirklich löschen?', 'Das kann nicht rückgängig gemacht werden.'))) {
      return;
    }
    setDeleting(true);
    try {
      await bulkDeleteAssets({ api, group, ids: selection.toArray(), onProgress: () => mutate() });
      notifications.emit({
        type: 'success',
        title: `${selection.size} Dateien erfolgreich gelöscht.`,
      });
      selection.clear();
    } catch (err: any) {
      notifications.emit({
        type: 'error',
        title: `Fehler beim Löschen`,
        message: err.message,
      });
    }
    setDeleting(false);
  };

  const handleBulkSelect = () => {
    manager.onBulkSelect?.(selection.toArray());
  };

  const handleDelete = (asset) => async (e) => {
    e.stopPropagation();
    if (!(await confirmWithModal('Wirklich löschen?', 'Das kann nicht rückgängig gemacht werden.'))) {
      return;
    }
    try {
      mutate(
        (data) =>
          ({
            ...data,
            items: data.items.filter((a) => a.assetID !== asset.assetID),
          } as any),
        false,
      );
      await asset.del();
      notifications.emit({
        type: 'success',
        title: `Erfolgreich gelöscht`,
      });
      await mutate();
      selection.include(asset.assetID, false);
    } catch (err: any) {
      notifications.emit({
        type: 'error',
        title: `Fehler beim Löschen`,
        message: err.message,
      });
    }
  };
  return (
    <div>
      <section className="mt-6">
        <AssetManagerDropzone onDrop={handleDrop} />
      </section>
      <section className="mt-6">
        {isLoading && <LocalLoader />}
        {error && <p>Fehler beim Laden der Medien</p>}
        {isEmpty && <p>Keine Medien vorhanden</p>}
        {!selection.isEmpty && (
          <div className="mb-6 flex items-center">
            <Button className="rounded-none rounded-l-md" $secondary onClick={() => selection.clear()}>
              <Input type="checkbox" defaultChecked className="mr-2" />
              <span>{selection.size} ausgewählt</span>
            </Button>
            {manager.mode === 'bulkDelete' && (
              <Button className="rounded-none rounded-r-md" $secondary onClick={handleBulkDelete}>
                Dateien löschen{deleting && <Spinner className="ml-2" />}
              </Button>
            )}
            {manager.mode === 'bulkSelect' && (
              <Button className="rounded-none rounded-r-md" $primary onClick={handleBulkSelect}>
                Fertig
              </Button>
            )}
          </div>
        )}
        {view === 'tiles' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-6">
            {assets.map((asset, i) => (
              <AssetTile
                selected={selection?.has(asset.assetID)}
                key={asset.assetID || i}
                asset={asset}
                onClick={() => onClickAsset?.(asset)}
                group={group}
                size={400}
                label={snip(asset.upload?.name || asset.title, 10)}
              />
            ))}
          </div>
        )}
        {view === 'list' && !!assets?.length && (
          <>
            <Table className="mb-4">
              <Table.Head>
                <Table.Header></Table.Header>
                <Table.Header></Table.Header>
                <Table.Header>Dateiname</Table.Header>
                <Table.Header>Typ</Table.Header>
                <Table.Header>Größe</Table.Header>
                <Table.Header></Table.Header>
              </Table.Head>
              <Table.Body>
                {assets.map((asset, i) => (
                  <Table.Row
                    key={asset.assetID}
                    onClick={() => !deleting && selection.toggle(asset.assetID)}
                    className={classNames('group cursor-pointer', hover)}
                  >
                    <Table.Cell className="w-12">
                      <Input type="checkbox" checked={selection.has(asset.assetID)} onChange={() => {}} />
                    </Table.Cell>
                    <Table.Cell className="w-12 h-16 p-0">
                      <AssetTile asset={asset} group={group} size={100} className="h-10 w-10" label=" " />
                    </Table.Cell>
                    <Table.Cell>{asset.upload?.name || asset.title}</Table.Cell>
                    <Table.Cell>{asset.mimetype}</Table.Cell>
                    <Table.Cell>{asset.file && friendlyBytes(asset.file.size)}</Table.Cell>
                    <Table.Cell className="w-12">
                      <div className="opacity-0 group-hover:opacity-100">
                        <Button.Action
                          onClick={(e) => {
                            e.stopPropagation();
                            onClickAsset?.(asset);
                          }}
                          tooltip="Bearbeiten"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </Button.Action>
                        <Button.Action onClick={handleDelete(asset)} tooltip="Löschen">
                          <TrashIcon className="w-5 h-5" />
                        </Button.Action>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </>
        )}
        {assetList && (
          <Pagination total={assetList?.total} value={page} onChange={setPage} count={12} hideTextInfo={false} />
        )}
      </section>
    </div>
  );
}
export default AssetManagerGallery;

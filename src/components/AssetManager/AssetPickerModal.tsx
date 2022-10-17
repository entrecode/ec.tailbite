import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import useAssetGroup from '../../hooks/useAssetGroup';
import AssetGroupManager from './AssetGroupManager';
import useAssetManager from './useAssetManager';

function AssetPickerModal({
  assetGroupID,
  open,
  onClose,
  onChange,
  value,
  solo,
}: {
  assetGroupID: string;
  open?: boolean;
  onClose: () => void;
  onChange: (value: string[]) => void;
  value: string[];
  solo?: boolean;
}) {
  // TODO: only execute this bit if modal is open?
  const manager = useAssetManager({
    mode: 'bulkSelect',
    selectedAssetIDs: value,
    onBulkSelect: (assetIDs) => {
      onChange(assetIDs);
      onClose();
    },
  });
  const { data: assetGroup } = useAssetGroup({ assetGroupID });
  useEffect(() => {
    if (assetGroup) {
      manager.setGroup(assetGroup);
    }
  }, [assetGroup]);
  // value ?
  return (
    <Modal open={open} onClose={() => onClose()}>
      <div className="w-full 2xl:w-[1300px]">
        <div className="flex justify-between items-center mb-4">
          <span className="m-0 text-2xl">Bild{!solo && 'er'} auswählen</span>
          <Button.Action onClick={() => onClose()}>
            <XMarkIcon className="w-5 h-5" />
          </Button.Action>
        </div>
        <AssetGroupManager
          manager={manager}
          onClickAsset={(asset) => {
            if (solo) {
              onChange([asset.assetID]);
              onClose();
            } else {
              manager.selection.toggle(asset.assetID);
            }
          }}
        />
      </div>
    </Modal>
  );
}
export default AssetPickerModal;

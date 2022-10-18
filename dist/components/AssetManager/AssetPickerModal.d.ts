declare function AssetPickerModal({ assetGroupID, open, onClose, onChange, value, solo, }: {
    assetGroupID: string;
    open?: boolean;
    onClose: () => void;
    onChange: (value: string[]) => void;
    value: string[];
    solo?: boolean;
}): JSX.Element;
export default AssetPickerModal;

import AssetGroupResource from 'ec.sdk/lib/resources/datamanager/AssetGroupResource';
import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
declare function AssetTile({ asset, group, size, onClick, className, label, selected, }: {
    asset: DMAssetResource | any;
    group?: AssetGroupResource;
    size?: number;
    label?: string;
    className?: string;
    selected?: boolean;
    onClick?: (asset: DMAssetResource) => any;
}): JSX.Element;
export default AssetTile;

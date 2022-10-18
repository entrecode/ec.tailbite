import AssetGroupResource from 'ec.sdk/lib/resources/datamanager/AssetGroupResource';
import DataManagerResource from 'ec.sdk/lib/resources/datamanager/DataManagerResource';
import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
export declare function getType(mimetype: string): string;
export declare function getPossibleSizes(dm: any, group: any, thumb?: boolean): any;
export declare function getAllVariants(asset: DMAssetResource, thumb: boolean | undefined, group: AssetGroupResource, dm: DataManagerResource): any;
export declare function getVariant(asset: DMAssetResource, size: number, thumb: boolean | undefined, group: AssetGroupResource, dm: DataManagerResource): any;
export declare function bulkDeleteAssets({ api, group, ids, perBulk, onProgress }: {
    api: any;
    group: any;
    ids: any;
    perBulk?: number | undefined;
    onProgress: any;
}): Promise<void>;

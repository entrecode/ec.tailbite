declare function useAssetGroup({ assetGroupID, swrOptions }: {
    assetGroupID: string;
    swrOptions?: any;
}): import("swr").SWRResponse<import("ec.sdk/lib/resources/datamanager/AssetGroupResource").default, any>;
export default useAssetGroup;

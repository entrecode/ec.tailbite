import DMAssetList from 'ec.sdk/lib/resources/publicAPI/DMAssetList';
declare function useAssetList({ group, page, count, laggy, filterOptions, sort, }: {
    group: string;
    page?: number;
    count?: number;
    laggy?: boolean;
    sort?: [string] | string[];
    filterOptions?: {};
}): {
    error?: any;
    mutate: import("swr").KeyedMutator<DMAssetList>;
    isValidating: boolean;
    items: any[];
    data: DMAssetList | undefined;
};
export default useAssetList;

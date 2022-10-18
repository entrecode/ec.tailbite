/// <reference types="react" />
export declare function useAssetManager({ initialGroup, mode, onBulkSelect, selectedAssetIDs, }: {
    initialGroup?: any;
    mode?: 'bulkDelete' | 'bulkSelect';
    onBulkSelect?: (assetIDs: string[]) => void;
    selectedAssetIDs?: string[];
}): {
    mode: "bulkDelete" | "bulkSelect";
    list: {
        error?: any;
        mutate: import("swr").KeyedMutator<import("ec.sdk/lib/resources/publicAPI/DMAssetList").default>;
        isValidating: boolean;
        items: any[];
        data: import("ec.sdk/lib/resources/publicAPI/DMAssetList").default | undefined;
    };
    group: any;
    selection: {
        toArray: () => string[];
        has: (item: string) => boolean;
        add: (item: string) => void;
        delete: (item: string) => void;
        toggle: (item: string) => void;
        size: number;
        isEmpty: boolean;
        include: (item: string, value: boolean) => void;
        replace: (items: string[]) => void;
        concat: (items: string[]) => void;
        includesAll: (items: string[]) => boolean;
        clear: () => void;
    };
    setGroup: import("react").Dispatch<any>;
    sort: string[];
    setSort: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    query: string;
    setQuery: import("react").Dispatch<import("react").SetStateAction<string>>;
    type: string;
    setType: import("react").Dispatch<import("react").SetStateAction<string>>;
    page: number;
    setPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    duplicates: boolean;
    setDuplicates: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    range: undefined;
    setRange: import("react").Dispatch<import("react").SetStateAction<undefined>>;
    view: "list" | "tiles";
    setView: import("react").Dispatch<import("react").SetStateAction<"list" | "tiles">>;
    onBulkSelect: ((assetIDs: string[]) => void) | undefined;
};
export default useAssetManager;

import PublicAssetResource from 'ec.sdk/lib/resources/publicAPI/PublicAssetResource';
export interface FileOptions {
    /** Preserves Filenames */
    preserveFilenames?: boolean;
    /** Includes assetID in path */
    includeAssetIDInPath?: boolean;
    /** Ignores duplicates */
    ignoreDuplicates?: boolean;
    /** Optional custom names for assets. Mapped by indices to assets. */
    fileName?: string[];
    /** Custom file form fieldName */
    fieldName?: string;
    /** Deduplicate upload */
    deduplicate?: boolean;
}
/** Upload New Assets */
export declare function uploadAssets(api: any, assetGroupID: any, files: any, options?: FileOptions): Promise<PublicAssetResource[]>;
export interface DmAssetList {
    items: DMAsset[];
    total: number;
    count: number;
}
export interface DMAsset {
    assetID: string;
    caption: string;
    created: string;
    creator: string;
    creatorType: string;
    duplicates: number;
    file: AssetFile;
    fileVariants: FileVariant[];
    isUsed: boolean;
    mimetype: string;
    modified: string;
    tags: any[];
    thumbnails: Thumbnail[];
    title: string;
    type: string;
}
export interface AssetFile {
    url: string;
    size: number;
    resolution: Resolution;
}
export interface Resolution {
    width: number;
    height: number;
}
export interface FileVariant {
    url: string;
    size: number;
    resolution: Resolution;
}
export interface Thumbnail {
    url: string;
    dimension: number;
}
export interface Self {
    profile: string;
    href: string;
    templated: boolean;
}
export interface Collection {
    profile: string;
    href: string;
    templated: boolean;
}

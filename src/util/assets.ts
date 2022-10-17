import DMAssetList from 'ec.sdk/lib/resources/publicAPI/DMAssetList';
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

const defaultUploadOptions = {
  preserveFilenames: true,
  includeAssetIDInPath: true,
  ignoreDuplicates: false,
  deduplicate: false,
  fileName: [],
};

/** Upload New Assets */
export async function uploadAssets(
  api,
  assetGroupID,
  files,
  options: FileOptions = defaultUploadOptions
): Promise<PublicAssetResource[]> {
  if (!files.length) {
    throw new Error('no files');
  }
  const data = files[0].url ? files.map((f) => f.url) : getFormData(files, options);
  return api.createDMAssets(assetGroupID, data, options).then((assetList: DMAssetList) => assetList.getAllItems());
}

/** Returns form data for a file list. You have to append options (even if empty) to get formData for new assets! */
function getFormData(files: File[], options?: FileOptions): FormData {
  const formData: FormData = new FormData();
  files.forEach((file, i) => {
    const name = options?.fileName?.[i] || file.name;
    const fieldname = options?.preserveFilenames && options?.fieldName ? options.fieldName : 'file';
    formData.append(fieldname, file, name);
  });
  if (options) {
    ['preserveFilenames', 'includeAssetIDInPath', 'ignoreDuplicates', 'deduplicate'].forEach((key) => {
      if (key in options) {
        formData.append(key, `${options[key]}`);
      }
    });
  }
  return formData;
}

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

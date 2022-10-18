import DMAssetList from 'ec.sdk/lib/resources/publicAPI/DMAssetList';
import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
declare const FileUpload: ({ isActive, currentlyUploading, file, onChange, }: {
    isActive: boolean;
    currentlyUploading?: any[] | undefined;
    file?: DMAssetList | DMAssetResource | undefined;
    onChange?: any;
}) => JSX.Element;
export default FileUpload;

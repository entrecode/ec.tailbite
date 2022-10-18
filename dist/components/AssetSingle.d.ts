import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
import PublicAssetResource from 'ec.sdk/lib/resources/publicAPI/PublicAssetResource';
export declare function AssetSingle(props: {
    group: string;
    value: DMAssetResource;
    onChange: (item: PublicAssetResource) => void;
}): JSX.Element;

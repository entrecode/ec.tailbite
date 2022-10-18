import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';
/**
 * Renders an image with a loading indicator.
 */
declare const Img: {
    (props: {
        src?: string;
        alt?: string;
        className?: string;
        clickable?: boolean;
        title?: string;
        style?: {};
    }): JSX.Element;
    /**
     * Renders an DMAssetResource as an Image
     */
    Asset({ asset, size, width, height, onClick }: ImgAssetProps): JSX.Element;
};
export declare interface ImgAssetProps {
    asset: DMAssetResource;
    size?: number;
    width?: number;
    height?: number;
    onClick?: (e: any) => void;
    className?: string;
}
export default Img;

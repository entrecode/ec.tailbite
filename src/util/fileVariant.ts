import DMAssetList from "ec.sdk/lib/resources/publicAPI/DMAssetList";
import DMAssetResource from "ec.sdk/lib/resources/publicAPI/DMAssetResource";

export default function fileVariant(asset: DMAssetResource | DMAssetList, size: number) {
  const { best } =
    asset?.fileVariants?.reduce((best, current) => {
      const {
        resolution: { width, height },
      } = current;
      const diff = Math.abs(Math.max(width, height) - size);
      return !best || diff < best.diff ? { diff, best: current } : best;
    }, null) || {};
  return best?.url || asset?.file?.url;
}

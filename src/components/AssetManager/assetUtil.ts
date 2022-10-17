import AssetGroupResource from 'ec.sdk/lib/resources/datamanager/AssetGroupResource';
import DataManagerResource from 'ec.sdk/lib/resources/datamanager/DataManagerResource';
import DMAssetResource from 'ec.sdk/lib/resources/publicAPI/DMAssetResource';

export function getType(mimetype: string) {
  return mimetype.split('/')[0];
}

export function getPossibleSizes(dm, group, thumb = false) {
  const sizesProperty = thumb ? 'thumbSizes' : 'imageSizes';
  const groupSizes = group.settings?.[sizesProperty];
  const dmSizes = dm.config?.assetSettings?.[sizesProperty];
  const defaultSizes = [256, 512, 1024, 2048, 4096];
  return (groupSizes || dmSizes || defaultSizes).sort((a, b) => a - b);
}

export function getAllVariants(
  asset: DMAssetResource,
  thumb = false,
  group: AssetGroupResource,
  dm: DataManagerResource,
) {
  if (getType(asset.mimetype) !== 'image' || asset.mimetype === 'image/svg') {
    return [];
  }
  const variantsProperty = thumb ? 'thumbnails' : 'fileVariants';
  const generateRoute = thumb ? 't' : 'f';
  const getSize = thumb ? (v) => v.dimension : (v) => Math.max(v.resolution.width, v.resolution.height);
  const env = dm[Symbol.for('environment') as any];
  const rootUrl = `https://datamanager${env === 'stage' ? '.cachena' : ''}.entrecode.de`;
  const originalSize = Math.max(asset.file.resolution.width, asset.file.resolution.height);
  const possibleSizes = getPossibleSizes(dm, group, thumb).filter((size) => size < originalSize);
  return possibleSizes.map((size) => {
    const generated = asset[variantsProperty].find((v) => size === getSize(v));
    const generateUrl = `${rootUrl}/${generateRoute}/${dm.shortID}/${asset.assetID}/${size}`;
    const url = generated ? generated.url : generateUrl;
    return { size, url, generated };
  });
}

export function getVariant(
  asset: DMAssetResource,
  size: number,
  thumb = false,
  group: AssetGroupResource,
  dm: DataManagerResource,
) {
  if (getType(asset.mimetype) !== 'image' || asset.mimetype === 'image/svg') {
    return asset.file.url;
  }
  const getSize = thumb ? (v) => v.dimension : (v) => Math.max(v.resolution.width, v.resolution.height);
  const possibleSizes = getPossibleSizes(dm, group, thumb);
  const quantizedSize = possibleSizes.find((s) => s >= size);
  if (quantizedSize > getSize(asset.file)) {
    return asset.file.url;
  }
  const variants = getAllVariants(asset, thumb, group, dm);
  const match = variants.find((v) => v.size === quantizedSize);
  return match ? match.url : asset.file.url;
}

export async function bulkDeleteAssets({ api, group, ids, perBulk = 2, onProgress }) {
  while (ids.length) {
    const bulk = await api.dmAssetList(group.assetGroupID, {
      assetID: { any: ids.slice(0, perBulk) },
    });
    ids = ids.slice(perBulk);
    await Promise.all(bulk.items.map((asset) => asset.del()));
    onProgress();
  }
}

import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import useSet from '../../hooks/useSet';
import useAssetList from './useAssetList';

export function useAssetManager({
  initialGroup = null,
  mode = 'bulkDelete',
  onBulkSelect,
  selectedAssetIDs,
}: {
  initialGroup?: any;
  mode?: 'bulkDelete' | 'bulkSelect';
  onBulkSelect?: (assetIDs: string[]) => void;
  selectedAssetIDs?: string[];
}) {
  const selection = useSet(selectedAssetIDs || []);
  useEffect(() => {
    selection.replace(selectedAssetIDs || []);
  }, [selectedAssetIDs]);
  const [group, setGroup] = useState(initialGroup);
  const [sort, setSort] = useState(['-created']);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [view, setView] = useState<'tiles' | 'list'>('tiles');
  const count = 12;
  const [duplicates, setDuplicates] = useState(false);
  const [range, setRange] = useState();
  const q = useDebounce(query?.length > 1 ? query : '', 1000);
  const list = useAssetList({
    group: group?.assetGroupID,
    page,
    count,
    laggy: false,
    sort,
    filterOptions: {
      ...(q ? { title: { search: q } } : {}),
      ...(type ? { type } : {}),
      ...(duplicates ? { duplicates: { from: 1 } } : {}),
      ...(range ? { created: { from: new Date(range[0]), to: new Date(range[1]) } } : {}),
    },
  });
  return {
    mode,
    list,
    group,
    selection,
    setGroup,
    sort,
    setSort,
    query,
    setQuery,
    type,
    setType,
    page,
    setPage,
    duplicates,
    setDuplicates,
    range,
    setRange,
    view,
    setView,
    onBulkSelect,
  };
}

export default useAssetManager;

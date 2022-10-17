import React from 'react';
import Searchbar from '../../components/Searchbar';
import TimePagination from '../../components/TimePagination';
import Toggle from '../../components/Toggle';
import AssetManagerGallery from './AssetManagerGallery';
import AssetTypeSelect from './AssetTypeSelect';
import SortDropdown from './SortDropdown';
import TileListSwitch from './TileListSwitch';

function AssetGroupManager({ manager, onClickAsset }) {
  return (
    <>
      <nav className="flex mt-2 justify-between items-center">
        <div className="flex space-x-4 items-center">
          <Searchbar value={manager.query} onChange={manager.setQuery} placeholder="Dateiname oder Tag" />
          <TimePagination value={manager.range} onChange={manager.setRange} />
          <AssetTypeSelect value={manager.type} onChange={manager.setType} />
          <Toggle label="Duplikate" value={manager.duplicates} onChange={manager.setDuplicates} />
        </div>
        <div className="flex space-x-4 items-center">
          <SortDropdown value={manager.sort[0]} onChange={(s) => manager.setSort([s])} />
          <TileListSwitch value={manager.view} onChange={manager.setView} />
        </div>
      </nav>
      <AssetManagerGallery manager={manager} onClickAsset={(asset) => onClickAsset?.(asset)} />
    </>
  );
}
export default AssetGroupManager;

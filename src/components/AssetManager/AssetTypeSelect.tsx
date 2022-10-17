import React from 'react';
import SimpleSelect from '../../components/SimpleSelect';

function AssetTypeSelect({ value, onChange }) {
  return (
    <SimpleSelect
      className="!min-w-100px"
      items={[
        { label: 'Alle', value: '' },
        { label: 'Bild', value: 'image' },
        { label: 'Video', value: 'video' },
        { label: 'Audio', value: 'audio' },
        { label: 'Plain', value: 'plain' },
        { label: 'Document', value: 'document' },
        { label: 'Spreadsheet', value: 'spreadsheet' },
        { label: 'Other', value: 'other' },
      ]}
      value={value}
      onChange={onChange}
      placeholder="Typ"
    />
  );
}
export default AssetTypeSelect;

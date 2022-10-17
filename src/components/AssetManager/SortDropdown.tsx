import { BarsArrowUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../../components/Button';
import RadioDropdown from '../../components/RadioDropdown';

function SortDropdown({ value, onChange }) {
  return (
    <RadioDropdown
      value={value}
      onChange={onChange}
      options={{
        '-created': 'Hinzugefügt am (neueste zuerst)',
        created: 'Hinzugefügt am (älteste zuerst)',
        title: 'Dateiname (A-Z)',
        '-title': 'Dateiname (Z-A)',
        /* '-size': 'Größe (größte zuerst)',
        size: 'Größe (kleinste zuerst)', */
      }}
    >
      <Button className="flex items-center space-x-2" $secondary>
        <BarsArrowUpIcon className="w-5 h-5 pt-0.5" />
        <span>
          {{
            created: 'neueste zuerst',
            '-created': 'älteste zuerst',
            title: 'A-Z',
            '-title': 'Z-A',
            '-size': 'größte zuerst',
            size: 'kleinste zuerst',
          }[value] || 'Sortieren'}
        </span>
      </Button>
    </RadioDropdown>
  );
}
export default SortDropdown;

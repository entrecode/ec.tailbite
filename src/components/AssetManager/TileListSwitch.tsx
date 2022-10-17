import { Bars4Icon, Squares2X2Icon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../../components/Button';

function TileListSwitch({ value, onChange }) {
  return (
    <div className="flex">
      <Button
        $secondary={value !== 'tiles'}
        $primary={value === 'tiles'}
        onClick={() => onChange('tiles')}
        className="rounded-none rounded-l-md focus:ring-0"
      >
        <Squares2X2Icon className="w-5 h-5" />
      </Button>
      <Button
        $secondary={value !== 'list'}
        $primary={value === 'list'}
        onClick={() => onChange('list')}
        className="rounded-none rounded-r-md focus:ring-0"
      >
        <Bars4Icon className="w-5 h-5" />
      </Button>
    </div>
  );
}
export default TileListSwitch;

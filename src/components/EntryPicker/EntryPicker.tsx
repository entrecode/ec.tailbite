import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import Tailbite from '../Tailbite';
import EntryPickerMulti from './EntryPickerMulti';
import EntryPickerSolo from './EntryPickerSolo';

export declare interface LightEntry {
  id: string;
  _entryTitle: string;
  [key: string]: any;
}
export declare interface EntryPickerProps<T> {
  model: string;
  value: T; // {id:string,_entryTitle:string}
  search?: string; // property used for filterOptions.search
  label?: string; // property used to display entry
  autoselect?: boolean;
  onChange: (value: T) => void;
  canRemove?: (entry: LightEntry) => boolean;
}

export function EntryPickerInput({
  control,
  name,
  rules,
  solo,
  autoselect,
  ...rest
}: {
  model: string;
  solo?: boolean;
  autoselect?: boolean;
  control: any;
  name: string;
  rules?: any;
  [prop: string]: any;
}) {
  return (
    <Controller
      render={({ field }) =>
        solo ? (
          <EntryPickerSolo value={field.value} onChange={field.onChange} {...rest} />
        ) : (
          <EntryPickerMulti value={field.value} onChange={field.onChange} {...rest} />
        )
      }
      control={control}
      name={name}
      rules={rules}
    />
  );
}

export function EntryPickerExample() {
  const [entry, setEntry] = useState<string | null>('frcjP1xMmi3');
  const [entries, setEntries] = useState<string[]>(['frcjP1xMmi3', '_gMy0O9Mei']);
  return (
    <Tailbite
      environment={{
        shortID: '83cc6374',
        env: 'stage',
        colors: {
          primary: '#ba443c',
        },
      }}
    >
      <EntryPickerMulti model="muffin" search="name" value={entries} onChange={setEntries} />
      <EntryPickerSolo model="muffin" search="name" value={entry} onChange={setEntry} />
    </Tailbite>
  );
}

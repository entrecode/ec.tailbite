import { useState } from 'react';
import { Controller } from 'react-hook-form';
import Button from '../Button';
import Form from '../Form';
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
  filterOptions?: object;
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
  const [entry2, setEntry2] = useState<string | null>(null);
  const [entries, setEntries] = useState<string[]>(['frcjP1xMmi3', '_gMy0O9Mei']);
  const [entries2, setEntries2] = useState<string[]>([]);
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
      <Form>
        <Form.Item $dense $first>
          <Form.Item.Label>Multi</Form.Item.Label>
          <Form.Item.Body>
            <EntryPickerMulti model="muffin" search="name" value={entries} onChange={setEntries} />
          </Form.Item.Body>
          <Button $primary onClick={() => setEntries(['HklxwZ5yb', 'rymtIwb5yb'])}>
            change value from outside
          </Button>
        </Form.Item>
        <Form.Item $dense>
          <Form.Item.Label>Multi Empty</Form.Item.Label>
          <Form.Item.Body>
            <EntryPickerMulti model="muffin" search="name" value={entries2} onChange={setEntries2} />
          </Form.Item.Body>
          <Button $primary onClick={() => setEntries2(['HklxwZ5yb', 'rymtIwb5yb'])}>
            change value from outside
          </Button>
        </Form.Item>
        <Form.Item $dense>
          <Form.Item.Label>Solo</Form.Item.Label>
          <Form.Item.Body>
            <EntryPickerSolo model="muffin" search="name" value={entry} onChange={setEntry} />
          </Form.Item.Body>
          <Button $primary onClick={() => setEntry('HklxwZ5yb')}>
            change value from outside
          </Button>
        </Form.Item>
        <Form.Item $dense>
          <Form.Item.Label>Solo Empty</Form.Item.Label>
          <Form.Item.Body>
            <EntryPickerSolo model="muffin" search="name" value={entry2} onChange={setEntry2} />
          </Form.Item.Body>
          <Button $primary onClick={() => setEntry2('HklxwZ5yb')}>
            change value from outside
          </Button>
        </Form.Item>
      </Form>
    </Tailbite>
  );
}

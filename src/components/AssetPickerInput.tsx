import React from 'react';
import { Controller } from 'react-hook-form';
// import AssetGroupPicker from './AssetGroupPicker';
import AssetPickerMulti from './AssetPickerMulti';
import AssetPickerSingle from './AssetPickerSingle';
// import DMPicker from './DMPicker';

const border =
  'border-2 border-dashed border-gray-600 dark:border-gray-300 p-4 rounded-md flex justify-center items-center';

// TODO: storybook?

export function AssetPickerInput(props: any) {
  const { control, name, rules, solo, ...pickerProps } = props;
  return (
    <Controller
      render={({ field }) =>
        solo ? (
          <AssetPickerSingle value={field.value} onChange={field.onChange} {...pickerProps} />
        ) : (
          <AssetPickerMulti value={field.value} onChange={field.onChange} {...pickerProps} />
        )
      }
      control={control}
      name={name}
      rules={rules}
    />
  );
}

/* export function AssetPickerExample() {
  const [dm, setDm] = useState<any>();
  const [group, setGroup] = useState<any>();
  const [value, setValue] = useState<any>();
  useEffect(() => {
    setValue('');
  }, [dm, group]);
  useEffect(() => {
    setGroup('');
  }, [dm]);
  // in real life, you wont need DMPicker / PublicAPIProvider as you will have an API inside an appsite.
  // Also most of the time, you might want to hard code assetGroupID.
  return (
    <Card className="max-w-3xl">
      <Card.Body>
        <DMPicker value={dm} onChange={setDm} />
        {dm && (
          <PublicAPIProvider shortID={dm.shortID}>
            <AssetGroupPicker datamanager={dm} value={group} onChange={setGroup} />
            {group && <AssetPickerSingle group={group.assetGroupID} value={value} onChange={setValue} />}
          </PublicAPIProvider>
        )}
      </Card.Body>
    </Card>
  );
}
 */

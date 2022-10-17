import { filterOptions } from 'ec.sdk/lib/resources/ListResource';
import React, { useEffect } from 'react';
import useEntryList from '../hooks/useEntryList';
import { Property } from '../hooks/useSchema';
import DevNote from './DevNote';
import { EntryFieldProps, tokenizeType } from './EntryField';
import SelectInput, { SelectInputProps } from './SelectInput';
import { SelectItem } from './SimpleSelect';

export interface EntrySelectProps extends Omit<EntryFieldProps, 'schema'>, Pick<SelectInputProps, 'renderPlaceholder'> {
  /** filterOptions to pass to useEntryList */
  filterOptions?: filterOptions;
  /** which property is used to display each entry, defaults to _entryTitle  */
  labelProperty?: string;
  /** If given, the items will be rendered above the entryList */
  staticItems?: SelectItem<string>[];
  /** The model to load entries from */
  model?: string;
  /** If no schema is given, make sure to pass model name instead */
  schema?: Property; // made optional
  // reduceItems?: (acc: SelectItem<string>[], item: SelectItem<string>[]) => SelectItem<string>[];
}

// TODO: refactor staticItems to reduceItems ? This would allow adding items / dividers anywhere + filtering entries. Maybe add this to SimpleSelect directly

/** SimpleSelect with entries inside. For use with useEntryForm / EntryForm. Expects props generated with `entryField`  */
function EntrySelect(props: EntrySelectProps) {
  const {
    filterOptions = { _count: 25 },
    field,
    schema,
    labelProperty = '_entryTitle',
    form: { control },
    renderPlaceholder,
    placeholder,
    staticItems = [],
    model: modelProp,
  } = props;
  const [type, schemaModel] = schema ? tokenizeType(schema?.title) || [] : [];
  if (type && type !== 'entry') {
    return <DevNote>EntrySelect can only be used with fields of type "entry".</DevNote>;
  }
  const model = schemaModel || modelProp;
  if (!model) {
    return (
      <DevNote>no model set for field "{field}". Make sure field has validation set to target model name.</DevNote>
    );
  }
  const { items: entries, data: entryList } = useEntryList({ model, filterOptions });

  useEffect(() => {
    if (entryList && entryList?.total > entryList?.count) {
      console.warn(
        `EntrySelect: more than ${entryList.count} entries found for field "${field}", model "${model}". Either adjust "count" prop or consider using a different field type.`,
      );
    }
  }, [entryList]);

  return (
    <>
      {!entries ? (
        <>...</>
      ) : (
        <SelectInput
          items={staticItems.concat(entries?.map(({ [labelProperty]: label, id: value }) => ({ label, value })))}
          control={control}
          name={field}
          renderPlaceholder={renderPlaceholder}
          placeholder={placeholder || 'Bitte wählen...'}
        />
      )}
    </>
  );
}

export default EntrySelect;

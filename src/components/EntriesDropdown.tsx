import EntryResource from 'ec.sdk/lib/resources/publicAPI/EntryResource';
import React from 'react';
import { Controller } from 'react-hook-form';
import useEntryList, { UseEntryListProps } from '@/hooks/useEntryList';
import { Property } from '@/hooks/useSchema';
import Dropdown from './Dropdown';
import { EntryFieldProps, tokenizeType } from './EntryField';

export interface EntriesDropdownProps extends Omit<EntryFieldProps, 'schema'>, Omit<UseEntryListProps, 'model'> {
  labelProperty?: string;
  model?: string; // defaults to model in schema.title
  renderSelectedLabel?: (value: string[], items: EntryResource[]) => React.ReactNode;
  schema?: Property;
}

// TODO: refactor using Dropdown.Checker

/** Dropdown to select entries from a model, expects entryfield as returned from EntryForm.  */
function EntriesDropdown(props: EntriesDropdownProps) {
  const {
    // EntryFieldProps
    field,
    form: { control },
    rules,
    placeholder = 'Bitte wählen...',
    // UseEntryListProps
    filterOptions,
    swrOptions,
    filter,
    // EntriesDropdownProps
    labelProperty = '_entryTitle',
    renderSelectedLabel,
    schema,
    model = props.model || (schema && tokenizeType(schema?.title)[1]),
  } = props;
  const { items } = useEntryList({ model: model || null, filterOptions, swrOptions, filter });
  return (
    <Controller
      render={({ field }) => (
        <Dropdown
          label={`${
            field.value?.length
              ? renderSelectedLabel?.(field.value, items || []) || `${field.value?.length} ausgewählt`
              : placeholder
          }`}
        >
          <Dropdown.Panel>
            <form className={`space-y-4`}>
              {items?.map((entry) => (
                <Dropdown.Checkbox
                  key={entry.id}
                  checked={field.value?.includes(entry.id)}
                  onChange={(e) =>
                    field.onChange(
                      e.target.checked
                        ? field.value?.concat([entry.id]) || []
                        : field.value?.filter((id) => id !== entry.id) || [],
                    )
                  }
                >
                  {entry[labelProperty]}
                </Dropdown.Checkbox>
              ))}
            </form>
          </Dropdown.Panel>
        </Dropdown>
      )}
      control={control}
      name={field}
      rules={rules}
    />
  );
}

export default EntriesDropdown;

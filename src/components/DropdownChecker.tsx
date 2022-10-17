import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import Dropdown from './Dropdown';
import { EntryFieldProps } from './EntryField';
import { SelectItem } from './SimpleSelect';

export interface DropdownCheckerProps<T> extends EntryFieldProps {
  items: SelectItem<T>[];
  renderSelectedLabel?: (value: string[], items: SelectItem<T>[]) => React.ReactNode;
}

// TODO: fuse with Dropdown.Chcker
// this one is used by MembershipContractForm

function DropdownChecker(props: DropdownCheckerProps<any>) {
  const {
    // EntryFieldProps
    field,
    form: { control },
    rules,
    placeholder = 'Bitte wählen...',
    // DropdownCheckerProps
    items,
    renderSelectedLabel,
  } = props;
  const hiddenValues = useMemo(() => items?.filter((item) => item.hidden)?.map((item) => item.value) || [], [items]);
  return (
    <Controller
      render={({ field }) => (
        <Dropdown
          label={
           `${field.value?.length
            ? renderSelectedLabel?.(field.value, items) ||
              `${field.value?.filter((v) => !hiddenValues.includes(v))?.length} ausgewählt`
            : placeholder}` 
          }
        >
          <Dropdown.Panel>
            <form className={`space-y-4`}>
              {items?.map((item, i) => (
                <Dropdown.Checkbox
                  className={item.hidden ? 'hidden' : ''}
                  key={i}
                  checked={field.value?.includes(item.value)}
                  onChange={(e) =>
                    field.onChange(
                      e.target.checked
                        ? (field.value || []).concat([item.value])
                        : (field.value || []).filter((value) => value !== item.value),
                    )
                  }
                >
                  {item.label}
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

export default DropdownChecker;

import React from 'react';
import useBackends from '../hooks/useBackends';
import SimpleSelect from './SimpleSelect';

function BackendSelect(props: {
  /** Label for empty value, defaults to "Alle Backends" */
  defaultLabel?: string;
  /** Placeholder when nothing is selected */
  placeholder?: string;
  /** Prefix for backend item labels */
  prefix?: string;
  /** current value (backendID) */
  value?: string;
  /** onChange callback */
  onChange?: (value: string) => void;
  /** extra classes for SimpleSelect */
  className?: string;
  /** if true, there will be no selectable option for an empty value */
  excludeEmpty?: boolean;
}) {
  const {
    defaultLabel = 'Alle Backends',
    prefix = '',
    value,
    onChange,
    className,
    excludeEmpty,
    placeholder = 'Backend wählen...',
  } = props;
  const { backends } = useBackends();
  const backendItems = [
    ...(!excludeEmpty ? [{ label: defaultLabel, value: null }] : []),
    ...Object.entries(backends || {}).map(([value, label]) => ({ label: `${prefix}${label}`, value })),
  ];
  if (Object.keys(backends || {}).length < 2) {
    return <></>;
  }
  return (
    <SimpleSelect
      items={backendItems}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    ></SimpleSelect>
  );
}

// just do a global search with "<BackendSelect" to see example usage
// all you need is "backends" + "setBackends" which are provided by useBackends or useSharedResource

export default React.memo(BackendSelect);

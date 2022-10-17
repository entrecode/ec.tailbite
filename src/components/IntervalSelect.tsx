import React, { forwardRef } from 'react';
import Input from './Input';

export const periods = [
  { value: 'false', label: 'einmalig', singular: '-', plural: '-' },
  { value: 'P1D', label: 'täglich', singular: 'Tag', plural: 'Tage' },
  { value: 'P1W', label: 'wöchentlich', singular: 'Woche', plural: 'Wochen' },
  { value: 'P1M', label: 'monatlich', singular: 'Monat', plural: 'Monate' },
  { value: 'P3M', label: 'pro Quartal', singular: 'Quartal', plural: 'Quartale' },
  { value: 'P6M', label: 'halbjährlich', singular: 'Halbjahr', plural: 'Halbjahre' },
  { value: 'P1Y', label: 'jährlich', singular: 'Jahr', plural: 'Jahre' },
];


// TODO add types
const IntervalSelect: any = forwardRef<any>((props, ref) => {
  return (
    <Input.Select {...props} ref={ref}>
      {periods.map(({ value, label }, i) => (
        <option value={value} key={i}>
          {label}
        </option>
      ))}
    </Input.Select>
  );
});
export default IntervalSelect;

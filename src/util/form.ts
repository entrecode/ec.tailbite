import { UseFormReturn } from 'react-hook-form';

// swap array elements with index a and b, using field of form
export const swap =
  (field: string, form: UseFormReturn<any, any>, onSwap?: (from: number, to: number) => void) =>
  (a: number, b: number) => {
    const { getValues, setValue } = form;
    const items = getValues(field);
    [items[a], items[b]] = [items[b], items[a]];
    setValue(field, [...items], { shouldDirty: true });
    onSwap?.(a, b);
  };

// remove array element with index, using field of form
export const remove = (field: string, form: UseFormReturn<any, any>, index: number) => {
  const { getValues, setValue } = form;
  const items = getValues(field) || [];
  items.splice(index, 1);
  setValue(field, [...items], { shouldDirty: true });
};

export const append = (field: string, form: UseFormReturn<any, any>, value: any) => {
  const { getValues, setValue } = form;
  const items = getValues(field) || [];
  setValue(field, [...items, value], { shouldDirty: true });
};

import React from 'react';
import { Control } from 'react-hook-form';
import { SelectItem } from './SimpleSelect';
export interface SelectInputProps {
    items: SelectItem<string>[];
    placeholder?: string;
    renderPlaceholder?: (value: string, items: SelectItem<string>[]) => React.ReactNode;
    control: Control<any, any>;
    name: string;
    rules?: any;
}
declare function SelectInput(props: any): JSX.Element;
export default SelectInput;

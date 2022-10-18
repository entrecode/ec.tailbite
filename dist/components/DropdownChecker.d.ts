import React from 'react';
import { EntryFieldProps } from './EntryField';
import { SelectItem } from './SimpleSelect';
export interface DropdownCheckerProps<T> extends EntryFieldProps {
    items: SelectItem<T>[];
    renderSelectedLabel?: (value: string[], items: SelectItem<T>[]) => React.ReactNode;
}
declare function DropdownChecker(props: DropdownCheckerProps<any>): JSX.Element;
export default DropdownChecker;

import { SelectItem } from './SimpleSelect';
declare function Autofill(props: {
    items: SelectItem<string>[];
    value: string;
    autoFocus?: boolean;
    onChange?: (value: string, shouldChangeValueFromOutside?: boolean) => void;
    filter?: boolean | ((item: SelectItem<string>, value: string) => boolean);
    renderInput?: (props: any) => JSX.Element;
    onSelect?: (value: string, item: SelectItem<string>) => void;
    placeholder?: string;
}): JSX.Element;
export declare function AutofillPicker({ items, onChange, value, getLabel, filter, placeholder, onType, debounce }: any): JSX.Element;
export declare function AutofillExample(): JSX.Element;
export default Autofill;

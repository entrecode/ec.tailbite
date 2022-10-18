declare type DropdownItems = {
    label: string;
    value: any;
}[];
declare const InputWithDropdown: {
    ({ label, name, placeholder, value, onChange, dropdown, }: {
        label: string;
        name: string;
        placeholder?: string | undefined;
        value: any;
        onChange: (inputValue: any, dropdownValue: any) => void;
        dropdown: {
            items: DropdownItems;
            label: string;
            name: string;
            value: any;
        };
    }): JSX.Element;
    Dropdown({ label, name, items, value, onSelect, }: {
        label: string;
        name: string;
        items: DropdownItems;
        value: string;
        onSelect: (value: any) => void;
    }): JSX.Element;
};
export default InputWithDropdown;

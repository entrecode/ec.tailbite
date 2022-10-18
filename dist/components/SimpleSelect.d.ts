export interface SelectItem<T> {
    label: string;
    value?: T;
    hidden?: boolean;
    divider?: boolean;
}
export interface SimpleSelectProps<T> {
    items: Array<SelectItem<T>>;
    onChange?: (value?: T) => void;
    value?: T;
    placeholder?: string;
    className?: string;
}
export default function SimpleSelect(props: SimpleSelectProps<any>): JSX.Element;
export declare function SimpleSelectExample(): JSX.Element;

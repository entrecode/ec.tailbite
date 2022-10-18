declare interface ToggleProps {
    value: boolean;
    onChange: (value: boolean) => void;
    label?: string;
    secondaryLabel?: string;
}
export default function Toggle(props: ToggleProps): JSX.Element;
declare interface ToggleInputProps extends Omit<ToggleProps, 'value' | 'onChange'> {
    control: any;
    name: string;
    defaultValue?: boolean;
    rules?: any;
}
export declare function ToggleInput(props: ToggleInputProps): JSX.Element;
export declare const ToggleExample: () => JSX.Element;
export {};

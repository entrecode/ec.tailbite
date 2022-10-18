/** Simple hex color picker */
declare function ColorPicker({ value: valueProp, onChange, presetColors, className, buttonClass, }: {
    /** the current color */
    value: string;
    /** called when the color changes */
    onChange: (value: string) => void;
    /** an array of preset colors to show */
    presetColors?: string[];
    /** additional class names */
    className?: string;
    buttonClass?: string;
}): JSX.Element;
export declare function ColorPickerInput(props: any): JSX.Element;
/**
 * Picker styled to work in Sidebar forms
 */
export declare function InlinePicker({ value, onChange }: {
    value: string;
    onChange: (value: string) => void;
}): JSX.Element;
export declare function NativeColorPickerInput(props: any): JSX.Element;
export default ColorPicker;
export declare const ColorPickerExample: () => JSX.Element;

import { Control } from 'react-hook-form';
/** Masked Input for a date, for use with react-hook-form  */
declare function DateMask({ control, rules, name, placeholder, }: {
    /** control of react hook form */
    control: Control;
    /** register options, see https://react-hook-form.com/api/useform/register#options */
    rules?: any;
    /** field name to control */
    name: string;
    /** placeholder for empty field */
    placeholder?: string;
}): JSX.Element;
export default DateMask;

/**
 *
 * Input field for a date. Either enter via keyboard or click a day
 *
 * ```js
 * <CalendarInput
 *   value={value}
 *   onChange={setValue}
 *   placeholder="Wann möchtest du mit dem Wassertaxi fahren?"
 * />
 * ```
 */
declare function CalendarInput({ value: valueProp, onChange, placeholder, }: {
    value?: string;
    onChange?: (value: string | null) => void;
    placeholder?: string;
}): JSX.Element;
export declare function DateInput(props: any): JSX.Element;
export default CalendarInput;
export declare function CalendarInputExample(): JSX.Element;

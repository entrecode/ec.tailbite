import React from 'react';
/** Wrapper component to create any type of editable content with a save button
 *
 * ```js
 * const [value, setValue] = useState('Hello World');
 * <Editable showSaveButton={true} onSave={() => doSomethingWith(value)}>
 *   <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
 * </Editable>;
 * ```
 */
export default function Editable(props: {
    /** place your form inside the element */
    children: React.ReactNode;
    /** if true, the save button is visible */
    showSaveButton?: boolean;
    /** called when the save button is clicked */
    onSave?: () => void;
}): JSX.Element;

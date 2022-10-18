import React from 'react';
declare function BackendSelect(props: {
    /** Label for empty value, defaults to "Alle Backends" */
    defaultLabel?: string;
    /** Placeholder when nothing is selected */
    placeholder?: string;
    /** Prefix for backend item labels */
    prefix?: string;
    /** current value (backendID) */
    value?: string;
    /** onChange callback */
    onChange?: (value: string) => void;
    /** extra classes for SimpleSelect */
    className?: string;
    /** if true, there will be no selectable option for an empty value */
    excludeEmpty?: boolean;
}): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof BackendSelect>;
export default _default;

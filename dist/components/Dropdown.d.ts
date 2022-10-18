import React from 'react';
/** Compact Dropdown Component */
declare function Dropdown({ children, label, className, showIcon, }: {
    children: React.ReactNode;
    /** label to click */
    label: string | React.ReactNode;
    /** additional classes */
    className?: string;
    showIcon?: boolean;
}): JSX.Element;
declare namespace Dropdown {
    var Panel: ({ children, $right, }: {
        children: React.ReactNode;
        /** If true, the dropdown will be aligned right */
        $right?: boolean | undefined;
    }) => JSX.Element;
    var Checkbox: ({ checked, onChange, children, className, }: {
        checked: boolean;
        /** onChange callback */
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        children: React.ReactNode;
        /** Additional classes */
        className?: string | undefined;
    }) => JSX.Element;
    var Checker: ({ items, value, onChange, getLabel, $right }: DropdownCheckerProps) => JSX.Element;
    var CheckerInput: ({ name, rules, control, items, getLabel }: any) => JSX.Element;
    var Divider: import("tailwind-styled-components/dist/tailwind").TailwindComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
}
export declare const DropdownPanel: ({ children, $right, }: {
    children: React.ReactNode;
    /** If true, the dropdown will be aligned right */
    $right?: boolean | undefined;
}) => JSX.Element;
export declare const DropdownCheckbox: ({ checked, onChange, children, className, }: {
    checked: boolean;
    /** onChange callback */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
    /** Additional classes */
    className?: string | undefined;
}) => JSX.Element;
declare interface DropdownItem {
    label: string;
    value?: string;
    [key: string]: any;
}
declare interface DropdownCheckerProps {
    items?: DropdownItem[];
    value: string[];
    onChange: (value: string[]) => void;
    getLabel: (items: DropdownItem[], value: string[]) => string;
    $right?: boolean;
}
export declare const DropdownChecker: ({ items, value, onChange, getLabel, $right }: DropdownCheckerProps) => JSX.Element;
export declare const DropdownCheckerInput: ({ name, rules, control, items, getLabel }: any) => JSX.Element;
export declare const DropdownDivider: import("tailwind-styled-components/dist/tailwind").TailwindComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default Dropdown;
export declare function DropdownExample(): JSX.Element;

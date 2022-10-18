import React from 'react';
declare const Button: {
    ({ $disabled, onClick, loading, children, ...props }: {
        [key: string]: any;
        onClick?: ((...args: any[]) => any) | undefined;
        children?: React.ReactNode;
        loading?: boolean | undefined;
    }): JSX.Element;
    Action({ $disabled, children, onClick, tooltip, placement, className }: any): JSX.Element;
    Tooly({ children, onClick, tooltip, placement, className, disabled }: any): JSX.Element;
    Expander(props: ExpanderProps): JSX.Element;
    ToggleHeader({ children, onClick, open, $last, $first, className }: any): JSX.Element;
    Disclosure({ children, open, $last, $first }: any): JSX.Element;
};
export interface ExpanderProps {
    onClick: (e: any) => void;
    active: boolean;
    tooltip?: [string, string];
    placement?: string;
}
export default Button;
export declare function ButtonExample(): JSX.Element;

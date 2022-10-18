import React from 'react';
declare type ItemProps = {
    /** if true, the item will have no top border */
    $first?: boolean;
    /** if true, the label will be rendered above the input, instead of left to it */
    $dense?: boolean;
    /** additional classNames */
    className?: string;
    /** contents */
    children?: React.ReactNode;
};
declare const Form: any;
export declare const FormItem: (props: ItemProps) => JSX.Element;
export declare const FormExample: () => JSX.Element;
export default Form;

import React from 'react';
/**
 * Displays a Tooltip on Hover over children.
 */
export default function Tooly({ children, label, placement, transformMode, }: {
    children: React.ReactNode;
    label: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    transformMode?: boolean;
}): JSX.Element;
export declare function ToolyExample(): JSX.Element;

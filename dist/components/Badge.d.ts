import React from 'react';
declare type BadgeProps = {
    children: React.ReactNode;
    theme?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'slate';
    dotColor?: string;
    showDot?: boolean;
    onX?: () => void;
    hasX?: boolean;
    className?: string;
    onClick?: () => void;
};
export default function Badge({ children, theme, showDot, hasX, onX, onClick, dotColor, className, }: BadgeProps): JSX.Element;
export {};

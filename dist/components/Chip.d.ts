import React from 'react';
/** Just a regular old Chip Component */
export default function Chip({ onX, children, }: {
    /** if set, the chip has a clickable X which calls onX when clicked. */
    onX?: () => void;
    /** the content of the Chip */
    children: React.ReactNode;
}): JSX.Element;
export declare const ChipExample: () => JSX.Element;

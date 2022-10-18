import React from 'react';
/** Link to delete something, with trash icon. Opens native confirm. Simpler version of ConfirmDelete. */
declare function DeleteLink({ onClick, className, children, }: {
    /** callback when deletion is confirmed */
    onClick: (...args: any[]) => any;
    className?: string;
    children?: React.ReactNode;
}): JSX.Element;
export default DeleteLink;

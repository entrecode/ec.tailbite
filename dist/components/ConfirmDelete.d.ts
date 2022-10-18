import React from 'react';
/** Dialog to confirm a dangerous action */
declare function ConfirmDelete(props: {
    /** The title of the dialog */
    title: string;
    /** If true, the dialog is visible */
    open?: boolean;
    /** Called when the dialog is closed */
    onClose?: () => void;
    /** Called when the user confirms the action. */
    onDelete?: () => void;
    /** The message to display in the dialog */
    description?: string | React.ReactNode;
    /** If set, the user has to type the given string before being able to confirm. */
    secureDelete?: string;
    /** label for cancel button */
    cancelLabel?: string;
    /** label for delete button */
    deleteLabel?: string;
    /** If true, the delete button is disabled */
    isPending?: boolean;
    /** additional content below description */
    children?: React.ReactNode;
}): JSX.Element;
export default ConfirmDelete;
export declare function ConfirmDeleteExample(): JSX.Element;

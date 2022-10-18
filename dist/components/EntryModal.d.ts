import React from 'react';
import { UseEntryFormProps, UseEntryFormReturn } from '../hooks/useEntryForm';
export interface EntryModalProps extends Omit<UseEntryFormProps, 'onCancel'> {
    /** Callback after the form was submitted */
    onSubmit: (entry: any, isUpdate?: boolean) => Promise<any> | void;
    /** Callback after the entry was deleted */
    onDelete?: () => Promise<any> | void;
    /** Callback when the modal is closed */
    onClose?: () => void;
    /** controls the open state from outside */
    open: boolean;
    /** if true, click outside and esc will not close the modal */
    disableClose?: boolean;
    /** heading of the modal */
    heading?: string;
    /** children can be a function that receives the entryForm as argument. if not, DefaultEntryForm will be used */
    children?: (entryForm: UseEntryFormReturn) => React.ReactNode;
}
/** useEntryForm + Modal. Can also be passed all props of useEntryForm */
declare function EntryModal(props: EntryModalProps): JSX.Element;
export declare function EntryModalExample({ entry }: {
    entry: any;
}): JSX.Element;
export declare function EntryModalExample2({ entry }: {
    entry: any;
}): JSX.Element;
export declare function CustomEntryModalExample({ entry }: {
    entry: any;
}): JSX.Element;
export default EntryModal;

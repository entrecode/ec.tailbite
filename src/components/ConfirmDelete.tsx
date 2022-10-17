// https://tailwindui.com/components/application-ui/overlays/modals#component-47a5888a08838ad98779d50878d359b3
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useRef, useState } from 'react';
import Button from './Button';
import Form from './Form';
import LocalLoader from './LocalLoader';

/** Dialog to confirm a dangerous action */
function ConfirmDelete(props: {
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
}) {
  const {
    title,
    open,
    onClose,
    onDelete,
    description,
    secureDelete = '',
    cancelLabel = 'Abbrechen',
    deleteLabel = 'Löschen',
    isPending = false,
    children,
  } = props;
  const [confirmInput, setConfirmInput] = useState('');
  const cancelButtonRef = useRef(null);
  const confirmInputRef = useRef(null);
  const [pending, setPending] = useState(false);
  const isValid = confirmInput === secureDelete;
  const handleSubmit = async () => {
    if (confirmInput !== secureDelete || isPending) {
      return;
    }
    setPending(true);
    try {
      await onDelete?.();
    } catch (error) {
      console.error(error);
    }
     setPending(false);
     setConfirmInput('');
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto"
        initialFocus={confirmInputRef || cancelButtonRef}
        onClose={() => onClose?.()}
        style={{ zIndex: 2147483647 }}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-0"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-0"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-0"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white dark:bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                    </div>
                    {children || ''}
                    {secureDelete && (
                      <div>
                        <input
                          className={Form.Item.text}
                          type="text"
                          value={confirmInput}
                          onChange={(e) => setConfirmInput(e.target.value)}
                          ref={confirmInputRef}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse justify-between items-center">
                <Button
                  type="button"
                  $disabled={!isValid}
                  $danger={isValid}
                  className="w-full"
                  onClick={() => handleSubmit()}
                >
                  {isPending || pending ? <LocalLoader /> : deleteLabel}
                </Button>
                <Button $secondary type="button" className="w-full m-2" onClick={() => onClose?.()}>
                  {cancelLabel} {/*ref={cancelButtonRef} */}
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ConfirmDelete;

export function ConfirmDeleteExample() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div className="space-x-2">
      <Button $danger onClick={() => setOpen(true)}>
        safe delete
      </Button>
      <Button $danger onClick={() => setOpen2(true)}>
        normal delete
      </Button>
      <ConfirmDelete
        title="Etwas löschen"
        deleteLabel="Etwas löschen"
        description="Wirklich löschen? Gib 'confirm' in das Feld ein"
        secureDelete={'confirm'}
        open={open}
        onClose={() => setOpen(false)}
        onDelete={async () => {
          console.log('delete!');
          setOpen(false);
        }}
      />
      <ConfirmDelete
        title="Etwas löschen"
        deleteLabel="Etwas löschen"
        description="Wirklich löschen?"
        open={open2}
        onClose={() => setOpen2(false)}
        onDelete={async () => {
          console.log('delete!');
          setOpen2(false);
        }}
      />
    </div>
  );
}

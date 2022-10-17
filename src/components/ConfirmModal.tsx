import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import Button from './Button';
import Modal from './Modal';

enum ConfirmModalActions {
  open = 'open-confirm-modal',
  action = 'action-confirm-modal',
}

function ConfirmModal() {
  const [question, setQuestion] = React.useState('');
  const [headline, setHeadline] = React.useState('');
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    const modalListener = (e) => {
      setOpen(!!e.detail);
      e.detail?.question && setQuestion(e.detail.question);
      e.detail?.headline && setHeadline(e.detail.headline);
    };
    document.addEventListener(ConfirmModalActions.open, modalListener);
    return () => {
      document.removeEventListener(ConfirmModalActions.open, modalListener);
    };
  }, []);
  return (
    <Modal open={open} className="!p-0">
      <div className="sm:flex sm:items-start p-8">
        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
          <QuestionMarkCircleIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">{headline}</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">{question}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 flex justify-end space-x-4 items-center rounded-b-lg">
        <Button
          $secondary
          onClick={() => {
            const event = new CustomEvent(ConfirmModalActions.action, { detail: false });
            document.dispatchEvent(event);
          }}
        >
          Abbrechen
        </Button>
        <Button
          $primary
          onClick={() => {
            const event = new CustomEvent(ConfirmModalActions.action, { detail: true });
            document.dispatchEvent(event);
          }}
        >
          Bestätigen
        </Button>
      </div>
    </Modal>
  );
}
function openModal(headline, question) {
  const event = new CustomEvent(ConfirmModalActions.open, { detail: { question, headline } });
  document.dispatchEvent(event);
}
function closeModal() {
  const event = new CustomEvent(ConfirmModalActions.open, { detail: false });
  document.dispatchEvent(event);
}

export function confirmWithModal(headline, question) {
  return new Promise((resolve) => {
    openModal(headline, question);
    function confirmListener(e) {
      resolve(e.detail);
      document.removeEventListener(ConfirmModalActions.action, confirmListener);
      closeModal();
    }
    document.addEventListener(ConfirmModalActions.action, confirmListener);
  });
}

export default ConfirmModal;

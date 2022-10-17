import { TrashIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { classNames } from '../util/classNames';
import { confirmWithModal } from './ConfirmModal';

/** Link to delete something, with trash icon. Opens native confirm. Simpler version of ConfirmDelete. */
function DeleteLink({
  onClick,
  className,
  children,
}: {
  /** callback when deletion is confirmed */
  onClick: (...args: any[]) => any;
  className?: string;
  children?: React.ReactNode;
}) {
  const confirmClick = async () => {
    if (await confirmWithModal('Wirklich löschen?', 'Das kann nicht rückgängig gemacht werden.')) {
      onClick?.();
    }
  };
  return (
    <a
      className={classNames('inline-flex items-center group text-red-600 dark:text-red-300 cursor-pointer', className)}
      onClick={confirmClick}
    >
      <TrashIcon className="w-4 h-4 block opacity-0 group-hover:opacity-100" />
      <div className="flex items-center">{children}</div>
    </a>
  );
}

export default DeleteLink;

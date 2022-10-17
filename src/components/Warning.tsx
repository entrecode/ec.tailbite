import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function Warning({ label, children }: { label: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationCircleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3 text-left">
          {label && <h3 className="text-sm mb-1 font-medium text-yellow-800">{label}</h3>}
          <div className={`${label && 'mt-2'} text-sm text-yellow-700`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

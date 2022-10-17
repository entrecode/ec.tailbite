import { InformationCircleIcon } from '@heroicons/react/24/solid';

export default function Alert({ children, onClick, action }: any) {
  return (
    <div className="rounded-md bg-blue-100 p-4">
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        <div className="text-sm text-blue-700 w-full">{children}</div>
      </div>
    </div>
  );
}

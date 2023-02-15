import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from '../util/classNames';

function Tag({ label, onX, onClick }: { label: string; onX?: () => void; onClick?: () => any }) {
  return (
    <div
      className={classNames(
        'inline-block mr-2 mt-2 bg-gray-200 p-1.5 rounded-md select-none',
        onClick && 'hover:opacity-80 cursor-pointer',
      )}
      onClick={onClick}
    >
      <div className="flex items-center">
        {label}
        <div className="cursor-pointer hover:bg-gray-100 rounded-full" onClick={onX}>
          {onX && <XMarkIcon className="w-5 h-5" />}
        </div>
      </div>
    </div>
  );
}

export default Tag;

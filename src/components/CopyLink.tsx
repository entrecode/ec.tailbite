import { ClipboardDocumentIcon } from '@heroicons/react/24/solid';
import React from 'react';
import useTimeoutFlag from '../hooks/useTimeoutFlag';
import { classNames } from '../util/classNames';

/** Renders some clickable content to copy a given value to the clipboard. Shows a little clipboard icon next to the content. */
function CopyLink(props: {
  /** additional class names */
  className?: string;
  /** the string to copy */
  value?: string;
  /** content to click */
  children?: React.ReactNode;
  /** fallback content if no value is set */
  fallback?: React.ReactNode;
}) {
  const { className, children, value, fallback = '' } = props;
  const [animation, trigger] = useTimeoutFlag(2000);
  if (!value) {
    return <>{fallback}</>;
  }
  return (
    <a
      className={classNames(
        'inline-flex items-center group text-indigo-600 dark:text-indigo-300 cursor-pointer whitespace-nowrap',
        className,
      )}
      title={value}
      onClick={(e) => {
        e.stopPropagation();
        trigger();
        navigator.clipboard.writeText(value);
      }}
    >
      {children}

      <ClipboardDocumentIcon
        className={classNames(
          'w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all',
          animation ? 'animate-bounce text-green-400' : '',
        )}
      />
      <span className="text-green-400 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {animation ? 'kopiert!' : ''}
      </span>
    </a>
  );
}

export function CopyLinkExample() {
  return (
    <div className="max-w-md">
      <CopyLink value="https://www.google.com">Copy Link</CopyLink>
    </div>
  );
}

export default CopyLink;

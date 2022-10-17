import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import React from 'react';

/** External Link with icon */
function ExternalLink(props: {
  /** URL */
  href: string;
  /** Additional class name */
  className?: string;
  /** Link content */
  children?: React.ReactNode;
  /** fallback content if no href given */
  fallback?: React.ReactNode;

  target?: '_blank' | string;
}) {
  const { href, className, children, fallback = '', target = '_blank' } = props;
  if (!href) {
    return <>{fallback}</>;
  }
  return (
    <a
      className={`inline-flex items-center group text-indigo-600 dark:text-indigo-300 whitespace-nowrap ${
        className || ''
      }`}
      href={href}
      target={target}
      onClick={(e) => e.stopPropagation()}
    >
      <ArrowTopRightOnSquareIcon className="w-4 h-4 block opacity-0 group-hover:opacity-100" />
      <div className="flex items-center">{children}</div>
    </a>
  );
}

export default ExternalLink;

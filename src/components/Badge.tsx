import React from 'react';
import { classNames } from '../util/classNames';

type BadgeProps = {
  children: React.ReactNode;
  theme?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'slate';
  dotColor?: string;
  showDot?: boolean;
  onX?: () => void;
  hasX?: boolean;
  className?: string;
  onClick?: () => void;
};

// text-green-300

export default function Badge({
  children,
  theme = 'gray',
  showDot = false,
  hasX = false,
  onX,
  onClick,
  dotColor,
  className,
}: BadgeProps) {
  return (
    <span
      onClick={onClick}
      className={classNames(
        theme === 'gray' && 'dark:!text-gray-600',
        `inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-${theme}-200 text-${theme}-800 dark:bg-${theme}-300 dark:text-${theme}-600`,
        onClick && 'cursor-pointer',
        className,
      )}
    >
      {showDot && (
        <svg
          className="-ml-0.5 mr-1.5 h-2 w-2 text-${theme}-400"
          style={{
            color: dotColor || 'black',
          }}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
      )}
      {children}
      {hasX && (
        <button
          type="button"
          onClick={onX}
          className={`-mr-0.5 flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-${theme}-400 hover:bg-${theme}-200 hover:text-${theme}-500 focus:outline-none focus:bg-${theme}-500 focus:text-white`}
        >
          <span className="sr-only">Remove option</span>
          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      )}
    </span>
  );
}

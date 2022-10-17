import React, { useState } from 'react';
import { classNames } from '../util/classNames';
import Button from './Button';

/**
 * Displays a Tooltip on Hover over children.
 */
export default function Tooly({
  children,
  label,
  placement = 'top',
  transformMode = true,
}: {
  children: React.ReactNode;
  label: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  transformMode?: boolean;
}) {
  const [open, setOpen] = useState(false);
  let positions;
  if (transformMode) {
    positions = {
      top: '-translate-y-full -top-1',
      left: '-translate-x-full -left-1',
      right: 'translate-x-full -right-1',
      bottom: 'translate-y-full -bottom-1',
    };
  } else {
    positions = {
      top: 'bottom-full z-10',
      left: 'right-full z-10',
      right: 'left-full z-10',
      bottom: 'top-full z-10',
    };
  }

  if (!label) {
    return <>{children}</>;
  }

  return (
    <div className={`relative inline-flex items-center justify-center`}>
      <div className="inline-block group" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        {children}
      </div>
      <div
        role="tooltip"
        className={classNames(
          'absolute transition-opacity bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200 py-1 px-2 text-xs rounded-md pointer-events-none whitespace-nowrap z-[64] shadow-xl',
          open ? 'opacity-1' : 'opacity-0',
          positions[placement],
        )}
      >
        {label}
      </div>
    </div>
  );
}

export function ToolyExample() {
  return (
    <div className="space-x-2">
      <Tooly label="toooooly long longlon long long! long... long" placement="top">
        <Button>top</Button>
      </Tooly>
      <Tooly label="toooooly long longlon long long! long... long" placement="left">
        <Button>left</Button>
      </Tooly>
      <Tooly label="toooooly long longlon long long! long... long" placement="right">
        <Button>right</Button>
      </Tooly>
      <Tooly label="toooooly long longlon long long! long... long" placement="bottom">
        <Button>bottom</Button>
      </Tooly>
    </div>
  );
}

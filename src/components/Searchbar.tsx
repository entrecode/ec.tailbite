import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { classNames } from '../util/classNames';

// TODO: use Input.WithIcon

/** Searchbar input
 *
 * ```jsx
 * const [value, setValue] = useState('');
 * function App() {
 *   return (<Searchbar value={value} onChange={setValue} placeholder="Suche....." />);
 * }
 * ```
 *
 *
 */
function Searchbar(props: {
  onChange: (value: string) => void;
  value?: string;
  placeholder?: string;
  inputClassName?: string;
  onSearchClick?: () => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  autoFocus?: boolean;
}) {
  const {
    value = '',
    onChange,
    placeholder = 'Suchen...',
    onSearchClick,
    inputClassName,
    autoFocus,
    onFocus,
    onBlur,
  } = props;
  return (
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" onClick={() => onSearchClick?.()} />
      </div>
      {onSearchClick && value !== '' && (
        <div className="absolute right-0 pr-3 inset-y-0 top-1 flex items-center">
          <div onClick={onSearchClick} className="text-xs font-extralight text-gray-400 dark:text-gray-900">
            ↩
          </div>
        </div>
      )}
      <input
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        ref={(el) => setTimeout(() => autoFocus && el?.focus(), 0)}
        onKeyDown={(e) => onSearchClick && e.code === 'Enter' && onSearchClick()}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
          `focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300`,
          inputClassName,
        )}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Searchbar;

export function SearchbarExample() {
  const [value, setValue] = useState('');
  return (
    <div className="max-w-md">
      <Searchbar value={value} onChange={setValue} placeholder="Suche....." />
      <pre className="p-2">"{value}"</pre>
    </div>
  );
}

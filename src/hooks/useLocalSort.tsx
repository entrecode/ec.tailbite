import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import React, { useCallback, useEffect, useState } from 'react';

declare type SortFn<T> = (a: T, b: T) => number;

declare type SortMap<T> = { [property: string]: SortFn<T> };

export const sortType: { [type: string]: SortFn<any> } = {
  string: (a = '', b = '') => a.localeCompare(b),
  boolean: (a, b) => a - b,
};

/* [markdown]
 * Handles local sort for lists.
 *
 * Example:
 *
 * ```js
 * const { sorted, SortHandle } = useLocalSort<any>(
 *   items,
 *   {
 *     title: (a, b) => a.title.localeCompare(b.title),
 *     url: (a, b) => (a.url || '').localeCompare(b.url || ''),
 *     customDomain: (a, b) => a.customDomain - b.customDomain,
 *     hecInfo: (a, b) => b.hecinfoScreenCount - a.hecinfoScreenCount,
 *   },
 *   'title'
 * );
 * ```
 *
 * SortHandle can be used as a click handler that triggers sorting:
 *
 * ```jsx
 * <SortHandle property="title">Appsite Name</SortHandle>
 * ````
 *
 * `sorted` contains the locally sorted items.
 */

function useLocalSort<T>(items: T[], sortMap: SortMap<T>, defaultProp?) {
  const [sorted, setSorted] = useState([...items]);
  const [sortedBy, setSortedBy] = useState(defaultProp);
  const [asc, setAsc] = useState(true);
  const sortBy = useCallback(
    (prop, isAsc?) => {
      const sorter: SortFn<T> = sortMap[prop];
      if (!prop || !sorter) {
        prop && !sortMap[prop] && console.warn('no sort function for', prop);
        setSorted(items);
      } else {
        const ascSorted = items.sort(sorter);
        const _isAsc = isAsc ?? (prop === sortedBy ? !asc : true);
        setSorted(isAsc ? ascSorted : [...ascSorted].reverse());
        setAsc(_isAsc);
        setSortedBy(prop);
      }
    },
    [items, sortedBy, asc],
  );
  const isSortedBy = (p) => sortedBy === p;
  const SortHandle = ({ property, children }: any) => (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => sortBy(property)}>
      {isSortedBy(property) && !asc && <ChevronDownIcon className="w-5 h-5" />}
      {isSortedBy(property) && asc && <ChevronUpIcon className="w-5 h-5" />}
      {children}
    </div>
  );

  useEffect(() => {
    sortBy(sortedBy, asc ?? true);
  }, [items]);
  return { sortBy, sorted, asc, isSortedBy, SortHandle };
}
export default useLocalSort;

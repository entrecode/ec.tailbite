import React, { useEffect, useRef, useState } from 'react';

// helper hook to simplify state handling of unique items, see example below.
function useSet<T = any>(defaultItems: Array<T>, onChange?: (items: Array<T>) => void) {
  const [set, setSet] = useState<Set<T>>(new Set(defaultItems));
  const firstUpdate = useRef<boolean>(true);
  const get = () => new Set(Array.from(set));
  const add = (item: T) =>
    setSet((s) => {
      s.add(item);
      return get();
    });
  const remove = (item: T) =>
    setSet((s) => {
      s.delete(item);
      return get();
    });
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      onChange?.(Array.from(set));
    }
  }, [set]);
  const has = (item: T) => set.has(item);
  const toggle = (item: T) => (has(item) ? remove(item) : add(item));
  const include = (item: T, value: boolean) => (value ? add(item) : remove(item));
  const replace = (items: Array<T>) => setSet(new Set(items));
  const concat = (items: Array<T>) => setSet((s) => new Set([...s, ...items]));
  const includesAll = (items: Array<T>) => Array.from(set).every((item: T) => items.includes(item));
  const clear = () => setSet(new Set());
  const toArray = () => Array.from(set);
  return {
    toArray,
    has,
    add,
    delete: remove,
    toggle,
    size: set.size,
    isEmpty: set.size === 0,
    include,
    replace,
    concat,
    includesAll,
    clear,
  };
}

export default useSet;

export function UseSetExample() {
  const allTrees = ['ahorn', 'birke', 'linde'];
  const trees = useSet(['birke']);
  return (
    <ul>
      {allTrees.map((tree, i) => (
        <li key={i}>
          <button onClick={() => trees.toggle(tree)}>
            [{trees.has(tree) && 'X'}] {tree}
          </button>
        </li>
      ))}
    </ul>
  );
}

declare function useSet<T = any>(defaultItems: Array<T>, onChange?: (items: Array<T>) => void): {
    toArray: () => T[];
    has: (item: T) => boolean;
    add: (item: T) => void;
    delete: (item: T) => void;
    toggle: (item: T) => void;
    size: number;
    isEmpty: boolean;
    include: (item: T, value: boolean) => void;
    replace: (items: Array<T>) => void;
    concat: (items: Array<T>) => void;
    includesAll: (items: Array<T>) => boolean;
    clear: () => void;
};
export default useSet;
export declare function UseSetExample(): JSX.Element;

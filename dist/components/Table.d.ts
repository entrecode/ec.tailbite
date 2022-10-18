import React from 'react';
export declare const Table: {
    ({ children, className }: {
        children: React.ReactNode;
        className?: string | undefined;
    }): JSX.Element;
    Dense: ({ children, className }: {
        children: React.ReactNode;
        className?: string | undefined;
    }) => JSX.Element;
    Fast: ({ children, className }: {
        children: React.ReactNode;
        className?: string | undefined;
    }) => JSX.Element;
    Head: ({ children }: {
        children: React.ReactNode;
    }) => JSX.Element;
    Header: import("tailwind-styled-components/dist/tailwind").TailwindComponent<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, any>;
    Body: React.ForwardRefExoticComponent<{
        children: React.ReactNode;
    } & React.RefAttributes<unknown>>;
    Row: import("tailwind-styled-components/dist/tailwind").TailwindComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, any>;
    Cell: any;
};
export declare const TableDense: ({ children, className }: {
    children: React.ReactNode;
    className?: string | undefined;
}) => JSX.Element;
export declare const TableFast: ({ children, className }: {
    children: React.ReactNode;
    className?: string | undefined;
}) => JSX.Element;
export declare const TableHead: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const TableHeader: import("tailwind-styled-components/dist/tailwind").TailwindComponent<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, any>;
export declare const TableBody: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
} & React.RefAttributes<unknown>>;
export declare const striped: (i: any) => "bg-white dark:bg-gray-700" | "bg-gray-50 dark:bg-gray-800";
export declare const hover = "hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer";
export declare const TableRow: import("tailwind-styled-components/dist/tailwind").TailwindComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, any>;
export declare const TableCell: any;
export default Table;
export declare function TableExample(): JSX.Element;

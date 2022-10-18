import * as React from 'react';
import { UseEntryListProps } from '../hooks/useEntryList';
export declare const EntriesSelect: React.ForwardRefExoticComponent<UseEntryListProps & {
    children?: React.ReactNode;
    name: string;
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
} & React.RefAttributes<any>>;

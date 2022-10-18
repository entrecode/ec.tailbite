import { UseFormReturn } from 'react-hook-form';
export declare const swap: (field: string, form: UseFormReturn<any, any>, onSwap?: ((from: number, to: number) => void) | undefined) => (a: number, b: number) => void;
export declare const remove: (field: string, form: UseFormReturn<any, any>, index: number) => void;
export declare const append: (field: string, form: UseFormReturn<any, any>, value: any) => void;

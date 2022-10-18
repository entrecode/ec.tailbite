import { SWRConfiguration } from 'swr';
export interface UseAppsiteProps {
    route?: string;
    swrOptions?: SWRConfiguration;
    sortBy?: string | ((a: any, b: any) => number);
}
declare function useAppsite(props: UseAppsiteProps): {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export default useAppsite;
export declare const useRoles: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useCourses: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useClubs: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useEmployees: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useCourseTypes: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useOnlineMembershipTemplates: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useVouchers: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useAddons: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useArticles: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};
export declare const useContactCategories: () => {
    error?: any;
    mutate: import("swr").KeyedMutator<any>;
    isValidating: boolean;
    data: any;
};

export interface FetchError extends Error {
    info: any;
    status: number;
}
export declare const request: (url: any, method?: string, body?: any, headers?: {}) => Promise<any>;
export declare const get: (url: any, headers?: any) => Promise<any>;
export declare const put: (url: any, body: any, headers?: any) => Promise<any>;
export declare const post: (url: any, body: any, headers?: any) => Promise<any>;
export declare const del: (url: any, body: any, headers?: any) => Promise<any>;

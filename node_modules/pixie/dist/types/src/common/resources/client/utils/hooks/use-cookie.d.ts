interface Options {
    days?: number;
    path?: string;
    domain?: string;
    SameSite?: 'None' | 'Lax' | 'Strict';
    Secure?: boolean;
    HttpOnly?: boolean;
}
export declare function stringifyOptions(options: Options): string;
export declare const setCookie: (name: string, value: string, options?: Options) => void;
export declare function getCookie(name: string, initialValue?: string): string;
export declare function useCookie(key: string, initialValue?: string): readonly [string, (value: string, options?: Options) => void];
export {};

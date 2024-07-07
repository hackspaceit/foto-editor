interface Filter {
    /** Returns whether a string starts with a given substring. */
    startsWith(string: string, substring: string): boolean;
    /** Returns whether a string ends with a given substring. */
    endsWith(string: string, substring: string): boolean;
    /** Returns whether a string contains a given substring. */
    contains(string: string, substring: string): boolean;
}
export declare function useFilter(options?: Intl.CollatorOptions): Filter;
export {};

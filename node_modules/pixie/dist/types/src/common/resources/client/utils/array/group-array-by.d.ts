interface Options<T> {
    map?: (item: T) => T;
}
export declare function groupArrayBy<T>(arr: T[], cb: (item: any) => string, options?: Options<T>): {
    [key: string]: T[];
};
export {};

export declare function removeEmptyValuesFromObject<T extends Record<string, unknown>>(obj: T, options?: {
    copy?: boolean;
    deep?: boolean;
    arrays?: boolean;
}): T;

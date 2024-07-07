export interface UseMediaQueryOptions {
    noSSR?: boolean;
}
export declare function useMediaQuery(query: string, { noSSR }?: UseMediaQueryOptions): boolean | null;

import { UseQueryOptions } from '@tanstack/react-query';
import { PaginatedBackendResponse } from '../../http/backend-response/pagination-response';
export interface GetDatatableDataParams {
    orderBy?: string;
    orderDir?: 'asc' | 'desc';
    filters?: string | null;
    query?: string;
    with?: string;
    perPage?: number | string | null;
    page?: number | string;
    paginate?: 'simple' | 'lengthAware' | 'preferLengthAware' | 'cursor';
    [key: string]: string | number | boolean | undefined | null;
}
export declare const DatatableDataQueryKey: (endpoint: string, params?: GetDatatableDataParams | Record<string, string | number | boolean>) => (string | GetDatatableDataParams)[];
export declare function useDatatableData<T = object>(endpoint: string, params: GetDatatableDataParams, options?: Omit<UseQueryOptions<PaginatedBackendResponse<T>, unknown, PaginatedBackendResponse<T>, any[]>, 'queryKey' | 'queryFn'>, onLoad?: (data: PaginatedBackendResponse<T>) => void): import("@tanstack/react-query").UseQueryResult<PaginatedBackendResponse<T>, unknown>;

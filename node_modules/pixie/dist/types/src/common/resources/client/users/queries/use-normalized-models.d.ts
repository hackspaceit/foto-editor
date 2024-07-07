import { UseQueryOptions } from '@tanstack/react-query';
import { NormalizedModel } from '../../datatable/filters/normalized-model';
import { BackendResponse } from '../../http/backend-response/backend-response';
interface Response extends BackendResponse {
    results: NormalizedModel[];
}
interface Params {
    query?: string;
    perPage?: number;
    with?: string;
}
export declare function useNormalizedModels(endpoint: string, queryParams: Params, queryOptions?: Omit<UseQueryOptions<Response, unknown, Response, [string, Params]>, 'queryKey' | 'queryFn'> | null): import("@tanstack/react-query").UseQueryResult<Response, unknown>;
export {};

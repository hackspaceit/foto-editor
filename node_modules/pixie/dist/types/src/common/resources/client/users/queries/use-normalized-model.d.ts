import { NormalizedModel } from '../../datatable/filters/normalized-model';
import { BackendResponse } from '../../http/backend-response/backend-response';
interface Response extends BackendResponse {
    model: NormalizedModel;
}
export declare function useNormalizedModel(endpoint: string, queryParams?: Record<string, string>, queryOptions?: {
    enabled?: boolean;
}): import("@tanstack/react-query").UseQueryResult<Response, Error>;
export {};

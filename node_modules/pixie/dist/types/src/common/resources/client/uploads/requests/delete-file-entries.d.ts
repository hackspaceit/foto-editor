import { BackendResponse } from '../../http/backend-response/backend-response';
interface Response extends BackendResponse {
}
interface Payload {
    entryIds?: number[];
    deleteForever?: boolean;
    paths?: string[];
}
export declare function useDeleteFileEntries(): import("@tanstack/react-query").UseMutationResult<Response, Error, Payload, unknown>;
export {};

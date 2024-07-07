import { BackendResponse } from '../../http/backend-response/backend-response';
interface Response extends BackendResponse {
    bootstrapData: string;
}
export declare function useLogout(): import("@tanstack/react-query").UseMutationResult<Response, Error, void, unknown>;
export {};

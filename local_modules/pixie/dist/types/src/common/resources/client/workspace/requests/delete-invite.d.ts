import { BackendResponse } from '../../http/backend-response/backend-response';
interface Response extends BackendResponse {
}
interface Props {
    inviteId: string;
}
export declare function useDeleteInvite(): import("@tanstack/react-query").UseMutationResult<Response, Error, Props, unknown>;
export {};

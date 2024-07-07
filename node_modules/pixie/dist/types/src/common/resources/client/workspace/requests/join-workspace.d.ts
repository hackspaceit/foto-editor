import { BackendResponse } from '../../http/backend-response/backend-response';
import { Workspace } from '../types/workspace';
interface Response extends BackendResponse {
    workspace: Workspace;
}
interface Props {
    inviteId: string;
}
export declare function useJoinWorkspace(): import("@tanstack/react-query").UseMutationResult<Response, Error, Props, unknown>;
export {};

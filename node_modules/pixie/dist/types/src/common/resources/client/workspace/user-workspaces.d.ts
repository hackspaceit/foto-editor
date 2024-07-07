import { Workspace } from './types/workspace';
import { BackendResponse } from '../http/backend-response/backend-response';
export interface FetchUserWorkspacesResponse extends BackendResponse {
    workspaces: Workspace[];
}
export declare const PersonalWorkspace: Workspace;
export declare function useUserWorkspaces(): import("@tanstack/react-query").UseQueryResult<Workspace[], Error>;

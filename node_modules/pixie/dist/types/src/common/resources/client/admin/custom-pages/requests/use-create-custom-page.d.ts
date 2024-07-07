import { BackendResponse } from '@common/http/backend-response/backend-response';
import { CustomPage } from '../custom-page';
interface Response extends BackendResponse {
    page: CustomPage;
}
export interface CreateCustomPagePayload {
    title?: string;
    body?: string;
    slug?: string;
    hide_nav?: boolean;
}
export declare function useCreateCustomPage(endpoint?: string): import("@tanstack/react-query").UseMutationResult<Response, Error, CreateCustomPagePayload, unknown>;
export {};

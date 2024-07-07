import { BackendResponse } from '@common/http/backend-response/backend-response';
import { Reportable } from '@common/reports/Reportable';
interface Response extends BackendResponse {
}
export declare function useDeleteReport(model: Reportable): import("@tanstack/react-query").UseMutationResult<Response, Error, void, unknown>;
export {};

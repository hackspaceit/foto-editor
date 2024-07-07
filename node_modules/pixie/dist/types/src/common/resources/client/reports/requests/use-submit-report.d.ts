import { BackendResponse } from '@common/http/backend-response/backend-response';
import { Reportable } from '@common/reports/Reportable';
interface Response extends BackendResponse {
    model: Reportable;
}
interface Payload {
    reason?: string;
}
export declare function useSubmitReport(model: Reportable): import("@tanstack/react-query").UseMutationResult<Response, Error, Payload, unknown>;
export {};

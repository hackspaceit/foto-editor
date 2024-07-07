import { BackendResponse } from '../http/backend-response/backend-response';
import { Localization } from './localization';
export interface ChangeLocaleResponse extends BackendResponse {
    locale: Localization;
}
export declare function useChangeLocale(): import("@tanstack/react-query").UseMutationResult<ChangeLocaleResponse, Error, {
    locale?: string;
}, unknown>;

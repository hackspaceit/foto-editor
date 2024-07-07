import { BackendResponse } from '../../http/backend-response/backend-response';
interface Response extends BackendResponse {
    unreadCount: number;
}
interface Payload {
    ids?: string[];
    markAllAsUnread?: boolean;
}
export declare function useMarkNotificationsAsRead(): import("@tanstack/react-query").UseMutationResult<Response, Error, Payload, unknown>;
export {};

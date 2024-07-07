import { PaginatedBackendResponse } from '@common/http/backend-response/pagination-response';
import { DatabaseNotification } from '@common/notifications/database-notification';
export interface FetchUserNotificationsResponse extends PaginatedBackendResponse<DatabaseNotification> {
}
interface Payload {
    perPage?: number;
}
export declare function useUserNotifications(payload?: Payload): import("@tanstack/react-query").UseQueryResult<FetchUserNotificationsResponse, Error>;
export declare namespace useUserNotifications {
    var key: string[];
}
export {};

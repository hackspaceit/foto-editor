import { NotificationListItemProps } from '../../notifications/notification-list';
import { DatabaseNotification, DatabaseNotificationData } from '../../notifications/database-notification';
export interface WorkspaceInviteNotification extends DatabaseNotification {
    data: DatabaseNotificationData & {
        inviteId: string;
    };
}
export declare function WorkspaceInviteNotificationRenderer(props: NotificationListItemProps): import("react/jsx-runtime").JSX.Element;

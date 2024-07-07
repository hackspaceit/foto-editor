import React, { JSXElementConstructor } from 'react';
import { DatabaseNotification, DatabaseNotificationAction } from './database-notification';
interface NotificationListProps {
    notifications: DatabaseNotification[];
    className?: string;
}
export declare function NotificationList({ notifications, className, }: NotificationListProps): import("react/jsx-runtime").JSX.Element;
export interface NotificationListItemProps {
    notification: DatabaseNotification;
    onActionButtonClick?: ButtonActionsProps['onActionClick'];
    lineIconRenderer?: JSXElementConstructor<{
        icon: string;
    }>;
    isLast: boolean;
}
export declare function NotificationListItem({ notification, onActionButtonClick, lineIconRenderer, isLast, }: NotificationListItemProps): import("react/jsx-runtime").JSX.Element;
interface ButtonActionsProps {
    notification: DatabaseNotification;
    onActionClick?: (e: React.MouseEvent, action: DatabaseNotificationAction) => void;
}
export {};

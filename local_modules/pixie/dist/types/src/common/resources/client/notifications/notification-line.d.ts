import { JSXElementConstructor } from 'react';
import { DatabaseNotification, DatabaseNotificationLine } from './database-notification';
interface LineProps {
    notification: DatabaseNotification;
    line: DatabaseNotificationLine;
    index: number;
    iconRenderer?: JSXElementConstructor<{
        icon: string;
    }>;
}
export declare function Line({ notification, line, index, iconRenderer }: LineProps): import("react/jsx-runtime").JSX.Element;
export {};

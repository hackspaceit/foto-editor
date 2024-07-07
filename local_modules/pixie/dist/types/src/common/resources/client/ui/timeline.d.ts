import { ReactElement, ReactNode } from 'react';
interface TimelineProps {
    children: ReactElement<TimelineProps>[];
    className?: string;
}
export declare function Timeline({ children, className }: TimelineProps): import("react/jsx-runtime").JSX.Element;
interface TimelineItemProps {
    children: ReactNode;
    className?: string;
    isLast?: boolean;
}
export declare function TimelineItem({ children, className, isLast }: TimelineItemProps): import("react/jsx-runtime").JSX.Element;
export {};

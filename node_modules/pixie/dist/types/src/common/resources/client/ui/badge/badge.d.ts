import { ReactNode } from 'react';
export interface BadgeProps {
    children: ReactNode;
    className?: string;
    withBorder?: boolean;
    top?: string;
    right?: string;
}
export declare function Badge({ children, className, withBorder, top, right, }: BadgeProps): import("react/jsx-runtime").JSX.Element;

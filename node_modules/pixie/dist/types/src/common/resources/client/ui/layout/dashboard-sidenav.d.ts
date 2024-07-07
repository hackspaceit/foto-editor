import { ReactElement } from 'react';
export interface DashboardSidenavChildrenProps {
    className?: string;
    isCompactMode?: boolean;
}
export interface SidenavProps {
    className?: string;
    children: ReactElement<DashboardSidenavChildrenProps>;
    position?: 'left' | 'right';
    size?: 'sm' | 'md' | 'lg' | string;
    mode?: 'overlay';
    overlayPosition?: 'absolute' | 'fixed';
    display?: 'flex' | 'block';
    overflow?: string;
    forceClosed?: boolean;
}
export declare function DashboardSidenav({ className, position, children, size, mode, overlayPosition, display, overflow, forceClosed, }: SidenavProps): import("react/jsx-runtime").JSX.Element;

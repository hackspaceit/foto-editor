import { ComponentPropsWithoutRef } from 'react';
import { DashboardSidenavStatus } from './dashboard-layout-context';
interface DashboardLayoutProps extends ComponentPropsWithoutRef<'div'> {
    name: string;
    leftSidenavCanBeCompact?: boolean;
    leftSidenavStatus?: DashboardSidenavStatus;
    onLeftSidenavChange?: (status: DashboardSidenavStatus) => void;
    rightSidenavStatus?: DashboardSidenavStatus;
    initialRightSidenavStatus?: DashboardSidenavStatus;
    onRightSidenavChange?: (status: DashboardSidenavStatus) => void;
    height?: string;
    gridClassName?: string;
    blockBodyOverflow?: boolean;
}
export declare function DashboardLayout({ children, leftSidenavStatus: leftSidenav, onLeftSidenavChange, rightSidenavStatus: rightSidenav, initialRightSidenavStatus, onRightSidenavChange, name, leftSidenavCanBeCompact, height, className, gridClassName, blockBodyOverflow, ...domProps }: DashboardLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};

import { NavbarProps } from '../navigation/navbar/navbar';
export interface DashboardNavbarProps extends Omit<NavbarProps, 'toggleButton'> {
    hideToggleButton?: boolean;
}
export declare function DashboardNavbar({ children, className, hideToggleButton, ...props }: DashboardNavbarProps): import("react/jsx-runtime").JSX.Element;

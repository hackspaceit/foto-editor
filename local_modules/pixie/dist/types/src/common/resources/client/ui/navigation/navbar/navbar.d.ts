import { ReactElement, ReactNode } from 'react';
import { ButtonColor } from '@common/ui/buttons/get-shared-button-style';
import { NavbarAuthUserProps } from '@common/ui/navigation/navbar/navbar-auth-user';
type NavbarColor = 'primary' | 'bg' | 'bg-alt' | 'transparent' | string;
export interface NavbarProps {
    hideLogo?: boolean | null;
    toggleButton?: ReactElement;
    children?: ReactNode;
    className?: string;
    color?: NavbarColor;
    bgOpacity?: number | string;
    darkModeColor?: NavbarColor;
    logoColor?: 'dark' | 'light';
    textColor?: string;
    primaryButtonColor?: ButtonColor;
    border?: string;
    size?: 'xs' | 'sm' | 'md';
    rightChildren?: ReactNode;
    menuPosition?: string;
    authMenuItems?: NavbarAuthUserProps['items'];
    alwaysDarkMode?: boolean;
    wrapInContainer?: boolean;
}
export declare function Navbar(props: NavbarProps): import("react/jsx-runtime").JSX.Element;
export {};

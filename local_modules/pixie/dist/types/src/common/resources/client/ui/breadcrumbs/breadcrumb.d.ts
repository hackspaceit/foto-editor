import { ReactNode } from 'react';
import { ButtonSize } from '../buttons/button-size';
import { IconSize } from '../../icons/svg-icon';
export interface BreadcrumbsProps {
    children?: ReactNode;
    isDisabled?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    currentIsClickable?: boolean;
    isNavigation?: boolean;
}
export declare function Breadcrumb(props: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
export interface BreadcrumbSizeStyle {
    font: string;
    icon: IconSize;
    btn: ButtonSize;
    minHeight: string;
}

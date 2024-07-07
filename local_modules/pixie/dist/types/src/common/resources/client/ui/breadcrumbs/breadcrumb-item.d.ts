import { ReactNode } from 'react';
import type { BreadcrumbSizeStyle } from './breadcrumb';
export interface BreadcrumbItemProps {
    sizeStyle?: BreadcrumbSizeStyle;
    isMenuTrigger?: boolean;
    isMenuItem?: boolean;
    children: ReactNode | ((state: {
        isMenuItem?: boolean;
    }) => ReactNode);
    isCurrent?: boolean;
    onSelected?: () => void;
    isClickable?: boolean;
    isDisabled?: boolean;
    className?: string;
    isLink?: boolean;
}
export declare function BreadcrumbItem(props: BreadcrumbItemProps): import("react/jsx-runtime").JSX.Element;

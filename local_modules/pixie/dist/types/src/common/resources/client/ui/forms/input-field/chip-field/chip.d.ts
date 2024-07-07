import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { To } from 'react-router-dom';
export interface ChipProps {
    onRemove?: () => void;
    disabled?: boolean;
    selectable?: boolean;
    invalid?: boolean;
    errorMessage?: ReactElement | string;
    children?: ReactNode;
    className?: string;
    adornment?: null | ReactElement<{
        size: string;
        className?: string;
        circle?: boolean;
    }>;
    radius?: string;
    color?: 'chip' | 'primary' | 'danger' | 'positive';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    elementType?: 'div' | 'a' | JSXElementConstructor<any>;
    to?: To;
    onClick?: (e: React.MouseEvent) => void;
}
export declare function Chip(props: ChipProps): import("react/jsx-runtime").JSX.Element;

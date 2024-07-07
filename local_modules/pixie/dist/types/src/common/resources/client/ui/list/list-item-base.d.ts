import React, { ComponentPropsWithRef, JSXElementConstructor, ReactNode } from 'react';
import { To } from 'react-router-dom';
export interface ListItemBaseProps extends ComponentPropsWithRef<'div'> {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    endSection?: ReactNode;
    description?: ReactNode;
    textLabel?: string;
    capitalizeFirst?: boolean;
    isSelected?: boolean;
    isDisabled?: boolean;
    isActive?: boolean;
    className?: string;
    showCheckmark?: boolean;
    elementType?: 'a' | JSXElementConstructor<any> | 'div';
    target?: string;
    to?: To;
    href?: string;
    radius?: string;
    padding?: string;
}
export declare const ListItemBase: React.ForwardRefExoticComponent<Omit<ListItemBaseProps, "ref"> & React.RefAttributes<HTMLDivElement>>;

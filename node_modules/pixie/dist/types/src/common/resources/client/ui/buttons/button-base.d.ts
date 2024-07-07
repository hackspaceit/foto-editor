import React, { ComponentPropsWithRef, JSXElementConstructor } from 'react';
import { RelativeRoutingType, To } from 'react-router-dom';
import { ButtonColor, ButtonVariant } from './get-shared-button-style';
export interface ButtonBaseProps extends Omit<ComponentPropsWithRef<'button'>, 'color'> {
    color?: ButtonColor;
    variant?: ButtonVariant;
    value?: any;
    justify?: string;
    display?: string;
    radius?: string;
    shadow?: string;
    border?: string;
    whitespace?: string;
    form?: string;
    to?: To;
    relative?: RelativeRoutingType;
    href?: string;
    target?: '_blank';
    rel?: string;
    replace?: boolean;
    end?: boolean;
    elementType?: 'button' | 'a' | JSXElementConstructor<any>;
    download?: boolean | string;
}
export declare const ButtonBase: React.ForwardRefExoticComponent<Omit<ButtonBaseProps, "ref"> & React.RefAttributes<HTMLLinkElement | HTMLButtonElement>>;

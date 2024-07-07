import React from 'react';
export type IconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
export interface SvgIconProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: IconSize;
    color?: string;
    title?: string;
}
export declare const SvgIcon: React.ForwardRefExoticComponent<SvgIconProps & {
    attr?: {};
} & React.RefAttributes<SVGSVGElement>>;

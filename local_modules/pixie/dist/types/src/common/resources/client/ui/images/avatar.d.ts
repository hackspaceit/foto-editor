import React, { ComponentPropsWithoutRef } from 'react';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
export interface AvatarProps extends ComponentPropsWithoutRef<any> {
    className?: string;
    src?: string;
    label?: string;
    circle?: boolean;
    size?: Size;
    link?: string;
    fallback?: 'initials' | 'generic';
    lazy?: boolean;
}
export declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarProps, "ref"> & React.RefAttributes<HTMLImageElement>>;
export {};

import React, { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';
interface InputProps {
    className?: string;
    children: ReactNode;
    autoFocus?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
    inputProps?: ComponentPropsWithoutRef<'div'>;
    wrapperProps?: ComponentPropsWithoutRef<'div'>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLDivElement>>;
export {};

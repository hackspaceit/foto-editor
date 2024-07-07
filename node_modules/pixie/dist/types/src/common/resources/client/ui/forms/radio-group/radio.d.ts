import React, { ComponentPropsWithoutRef } from 'react';
import { AutoFocusProps } from '../../focus/use-auto-focus';
type RadioSize = 'xs' | 'sm' | 'md' | 'lg' | undefined;
export interface RadioProps extends AutoFocusProps, Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
    size?: RadioSize;
    value: string;
    invalid?: boolean;
    isFirst?: boolean;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export declare function FormRadio(props: RadioProps): import("react/jsx-runtime").JSX.Element;
export {};

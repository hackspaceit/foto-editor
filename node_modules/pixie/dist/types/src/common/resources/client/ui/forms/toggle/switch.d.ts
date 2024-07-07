import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { InputSize } from '../input-field/input-size';
import { AutoFocusProps } from '../../focus/use-auto-focus';
interface SwitchProps extends AutoFocusProps, Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
    size?: InputSize;
    className?: string;
    description?: ReactNode;
    invalid?: boolean;
    errorMessage?: string;
    iconRight?: ReactNode;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
interface FormSwitchProps extends SwitchProps {
    name: string;
}
export declare function FormSwitch(props: FormSwitchProps): import("react/jsx-runtime").JSX.Element;
export {};

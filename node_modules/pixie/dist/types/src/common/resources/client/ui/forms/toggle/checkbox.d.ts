import React, { ComponentPropsWithoutRef } from 'react';
import { InputSize } from '../input-field/input-size';
import { Orientation } from '../orientation';
import { AutoFocusProps } from '../../focus/use-auto-focus';
export interface CheckboxProps extends AutoFocusProps, Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
    size?: InputSize;
    className?: string;
    icon?: React.ComponentType;
    checkedIcon?: React.ComponentType;
    orientation?: Orientation;
    errorMessage?: string;
    isIndeterminate?: boolean;
    invalid?: boolean;
    inputTestId?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
interface FormCheckboxProps extends CheckboxProps {
    name: string;
}
export declare function FormCheckbox(props: FormCheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};

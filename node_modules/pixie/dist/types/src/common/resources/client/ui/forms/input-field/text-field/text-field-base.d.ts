import React, { ComponentPropsWithoutRef, Ref } from 'react';
import type { TextFieldProps } from './text-field';
interface Props extends TextFieldProps {
    labelProps?: ComponentPropsWithoutRef<'label'>;
    inputProps: ComponentPropsWithoutRef<'input'> | ComponentPropsWithoutRef<'textarea'>;
    descriptionProps?: ComponentPropsWithoutRef<'div'>;
    errorMessageProps?: ComponentPropsWithoutRef<'div'>;
    inputRef?: Ref<HTMLInputElement>;
    isLoading?: boolean;
    rows?: number;
}
export declare const TextFieldBase: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export {};

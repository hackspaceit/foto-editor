import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { InputFieldStyle } from './get-input-field-class-names';
import { BaseFieldProps } from './base-field-props';
export interface FieldProps extends BaseFieldProps {
    children: ReactNode;
    wrapperProps?: ComponentPropsWithoutRef<'div'>;
    labelProps?: ComponentPropsWithoutRef<'label' | 'span'>;
    descriptionProps?: ComponentPropsWithoutRef<'div'>;
    errorMessageProps?: ComponentPropsWithoutRef<'div'>;
    fieldClassNames: InputFieldStyle;
}
export declare const Field: React.ForwardRefExoticComponent<FieldProps & React.RefAttributes<HTMLDivElement>>;

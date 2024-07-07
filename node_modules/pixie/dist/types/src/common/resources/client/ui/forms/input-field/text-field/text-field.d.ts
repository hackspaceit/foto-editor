import React, { Ref } from 'react';
import { BaseFieldPropsWithDom } from '../base-field-props';
export interface TextFieldProps extends BaseFieldPropsWithDom<HTMLInputElement> {
    rows?: number;
    inputElementType?: 'input' | 'textarea';
    inputRef?: Ref<HTMLInputElement>;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLDivElement>>;
export interface FormTextFieldProps extends TextFieldProps {
    name: string;
}
export declare const FormTextField: React.ForwardRefExoticComponent<FormTextFieldProps & React.RefAttributes<HTMLDivElement>>;

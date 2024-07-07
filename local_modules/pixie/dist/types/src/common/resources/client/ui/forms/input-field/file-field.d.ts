import React, { ChangeEventHandler } from 'react';
import { BaseFieldProps } from './base-field-props';
export interface FileFieldProps extends Omit<BaseFieldProps, 'type'> {
    onChange?: ChangeEventHandler<'input'>;
    accept?: string;
}
export declare const FileField: React.ForwardRefExoticComponent<FileFieldProps & React.RefAttributes<HTMLInputElement>>;
export interface FormFileFieldProps extends FileFieldProps {
    name: string;
}
export declare function FormFileField({ name, ...props }: FormFileFieldProps): import("react/jsx-runtime").JSX.Element;

import { BaseFieldProps } from './base-field-props';
export interface InputFieldStyle {
    label: string;
    input: string;
    wrapper: string;
    inputWrapper: string;
    adornment: string;
    append: {
        size: string;
        radius: string;
    };
    size: {
        font: string;
        height: string;
    };
    description: string;
    error: string;
}
type InputFieldStyleProps = Omit<BaseFieldProps, 'value' | 'defaultValue' | 'onChange'>;
export declare function getInputFieldClassNames(props?: InputFieldStyleProps): InputFieldStyle;
export {};

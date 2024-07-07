import { ReactNode } from 'react';
import { MessageDescriptor } from '@common/i18n/message-descriptor';
import { BaseFieldProps } from '@common/ui/forms/input-field/base-field-props';
interface NormalizedModelFieldProps {
    label?: ReactNode;
    className?: string;
    background?: BaseFieldProps['background'];
    value?: string | number;
    placeholder?: MessageDescriptor;
    searchPlaceholder?: MessageDescriptor;
    defaultValue?: string | number;
    onChange?: (value: string | number) => void;
    invalid?: boolean;
    errorMessage?: string;
    description?: ReactNode;
    autoFocus?: boolean;
    queryParams?: Record<string, string>;
    endpoint: string;
    disabled?: boolean;
    required?: boolean;
}
export declare function NormalizedModelField({ label, className, background, value, defaultValue, placeholder, searchPlaceholder, onChange, description, errorMessage, invalid, autoFocus, queryParams, endpoint, disabled, required, }: NormalizedModelFieldProps): import("react/jsx-runtime").JSX.Element;
interface FormNormalizedModelFieldProps extends NormalizedModelFieldProps {
    name: string;
}
export declare function FormNormalizedModelField({ name, ...fieldProps }: FormNormalizedModelFieldProps): import("react/jsx-runtime").JSX.Element;
export {};

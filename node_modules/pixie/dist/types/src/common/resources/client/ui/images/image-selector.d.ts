import { ReactElement, ReactNode } from 'react';
import { SvgIconProps } from '@common/icons/svg-icon';
interface ImageSelectorProps {
    className?: string;
    label?: ReactNode;
    description?: ReactNode;
    invalid?: boolean;
    errorMessage?: ReactNode;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (newValue: string) => void;
    defaultValue?: string;
    diskPrefix: string;
    showRemoveButton?: boolean;
    showEditButtonOnHover?: boolean;
    autoFocus?: boolean;
    variant?: 'input' | 'square' | 'avatar';
    placeholderIcon?: ReactElement<SvgIconProps>;
    previewSize?: string;
    previewRadius?: string;
    stretchPreview?: boolean;
}
export declare function ImageSelector({ className, label, description, value, onChange, defaultValue, diskPrefix, showRemoveButton, showEditButtonOnHover, invalid, errorMessage, required, autoFocus, variant, previewSize, placeholderIcon, stretchPreview, previewRadius, disabled, }: ImageSelectorProps): import("react/jsx-runtime").JSX.Element;
interface FormImageSelectorProps extends ImageSelectorProps {
    name: string;
}
export declare function FormImageSelector(props: FormImageSelectorProps): import("react/jsx-runtime").JSX.Element;
export {};

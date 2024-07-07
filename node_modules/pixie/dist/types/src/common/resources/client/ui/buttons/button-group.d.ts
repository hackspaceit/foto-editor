import React from 'react';
import { ButtonColor, ButtonVariant } from './get-shared-button-style';
import { ButtonSize } from './button-size';
export interface ButtonGroupProps {
    children: React.ReactNode[];
    color?: ButtonColor;
    variant?: ButtonVariant;
    size?: ButtonSize;
    radius?: string;
    className?: string;
    value?: any;
    onChange?: (newValue: any) => void;
    multiple?: boolean;
    disabled?: boolean;
}
export declare function ButtonGroup({ children, color, variant, radius, size, className, value, onChange, multiple, disabled, }: ButtonGroupProps): import("react/jsx-runtime").JSX.Element;

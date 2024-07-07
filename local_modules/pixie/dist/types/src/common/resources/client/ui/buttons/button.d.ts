import React, { ReactElement } from 'react';
import { ButtonSize } from './button-size';
import { ButtonBaseProps } from './button-base';
export interface ButtonProps extends ButtonBaseProps {
    size?: ButtonSize;
    sizeClassName?: string;
    equalWidth?: boolean;
    startIcon?: ReactElement | null | false;
    endIcon?: ReactElement | null | false;
}
export declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

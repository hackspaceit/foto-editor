import React, { ReactElement } from 'react';
import { ButtonSize } from './button-size';
import { ButtonBaseProps } from './button-base';
import { BadgeProps } from '@common/ui/badge/badge';
export interface IconButtonProps extends ButtonBaseProps {
    children: ReactElement;
    padding?: string;
    size?: ButtonSize | null;
    iconSize?: ButtonSize | null;
    equalWidth?: boolean;
    badge?: ReactElement<BadgeProps>;
}
export declare const IconButton: React.ForwardRefExoticComponent<Omit<IconButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

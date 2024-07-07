import React, { ComponentPropsWithoutRef } from 'react';
export interface ProgressCircleProps extends ComponentPropsWithoutRef<'div'> {
    value?: number;
    minValue?: number;
    maxValue?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | string;
    isIndeterminate?: boolean;
    className?: string;
    position?: string;
    trackColor?: string;
    fillColor?: string;
}
export declare const ProgressCircle: React.ForwardRefExoticComponent<ProgressCircleProps & React.RefAttributes<HTMLDivElement>>;

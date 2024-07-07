import { ReactNode } from 'react';
export interface ProgressBarBaseProps {
    value?: number;
    minValue?: number;
    maxValue?: number;
    className?: string;
    showValueLabel?: boolean;
    size?: 'xs' | 'sm' | 'md';
    labelPosition?: 'top' | 'bottom';
    isIndeterminate?: boolean;
    label?: ReactNode;
    formatOptions?: Intl.NumberFormatOptions;
    role?: string;
    radius?: string;
    trackColor?: string;
    trackHeight?: string;
    progressColor?: string;
}
export declare function ProgressBarBase(props: ProgressBarBaseProps): import("react/jsx-runtime").JSX.Element;

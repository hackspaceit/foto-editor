import { ReactNode } from 'react';
export interface SectionHelperProps {
    title?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    color?: 'positive' | 'danger' | 'warning' | 'primary' | 'neutral' | 'bgAlt';
    className?: string;
    size?: 'sm' | 'md';
    leadingIcon?: ReactNode;
    onClose?: () => void;
}
export declare function SectionHelper({ title, description, actions, color, className, size, leadingIcon, onClose, }: SectionHelperProps): import("react/jsx-runtime").JSX.Element;

import { ReactNode } from 'react';
import { InputSize } from '../forms/input-field/input-size';
export interface IllustratedMessageProps {
    className?: string;
    size?: InputSize;
    image?: ReactNode;
    imageHeight?: string;
    imageMargin?: string;
    title?: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
}
export declare function IllustratedMessage({ image, title, description, action, className, size, imageHeight, imageMargin, }: IllustratedMessageProps): import("react/jsx-runtime").JSX.Element;

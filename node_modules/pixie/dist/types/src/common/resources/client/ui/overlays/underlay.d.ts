import { ComponentPropsWithoutRef } from 'react';
interface UnderlayProps extends Omit<ComponentPropsWithoutRef<'div'>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
    position?: 'fixed' | 'absolute';
    className?: string;
    isTransparent?: boolean;
    disableInitialTransition?: boolean;
}
export declare function Underlay({ position, className, isTransparent, disableInitialTransition, ...domProps }: UnderlayProps): import("react/jsx-runtime").JSX.Element;
export {};

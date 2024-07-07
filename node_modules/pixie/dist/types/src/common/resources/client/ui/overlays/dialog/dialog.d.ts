import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { InputSize } from '../../forms/input-field/input-size';
export type DialogSize = InputSize | '2xl' | 'auto' | 'fullscreen' | 'fullscreenTakeover' | string;
export interface DialogProps extends Omit<ComponentPropsWithoutRef<'div'>, 'size'> {
    children: ReactNode;
    size?: DialogSize;
    background?: string;
    className?: string;
    radius?: string;
    maxWidth?: string;
}
export declare function Dialog(props: DialogProps): import("react/jsx-runtime").JSX.Element;

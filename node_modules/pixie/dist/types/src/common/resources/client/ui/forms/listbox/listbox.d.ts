import { ComponentPropsWithoutRef, JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { UseListboxReturn } from './types';
import { OverlayProps } from '../../overlays/overlay-props';
interface Props extends ComponentPropsWithoutRef<'div'> {
    listbox: UseListboxReturn;
    mobileOverlay?: JSXElementConstructor<OverlayProps>;
    children?: ReactElement;
    searchField?: ReactNode;
    isLoading?: boolean;
    onClose?: () => void;
    prepend?: boolean;
}
export declare function Listbox({ listbox, children: trigger, isLoading, mobileOverlay, searchField, onClose, prepend, className: listboxClassName, ...domProps }: Props): import("react/jsx-runtime").JSX.Element;
export {};

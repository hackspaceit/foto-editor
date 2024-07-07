import { ReactElement, ReactNode, RefObject } from 'react';
import { DialogContextValue } from './dialog-context';
import { OffsetOptions, Placement, VirtualElement } from '@floating-ui/react-dom';
type PopoverProps = {
    type: 'popover';
    mobileType?: 'tray' | 'modal';
    placement?: Placement;
    offset?: OffsetOptions;
};
type ModalProps = {
    type: 'modal' | 'tray';
    mobileType?: 'tray' | 'modal';
    placement?: Placement;
};
type Props<T = any> = (PopoverProps | ModalProps) & {
    children: [ReactElement, (ctx: DialogContextValue) => void] | ReactNode;
    disableInitialTransition?: boolean;
    onClose?: (value: T | undefined, data: {
        initialValue: T;
        valueChanged: boolean;
    }) => void;
    isDismissable?: boolean;
    isOpen?: boolean;
    onValueChange?: (value: T) => void;
    alwaysReturnCurrentValueOnClose?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    defaultIsOpen?: boolean;
    triggerRef?: RefObject<HTMLElement> | RefObject<VirtualElement>;
    moveFocusToDialog?: boolean;
    returnFocusToTrigger?: boolean;
    triggerOnHover?: boolean;
    triggerOnContextMenu?: boolean;
    value?: T;
    defaultValue?: T;
    usePortal?: boolean;
};
export declare function DialogTrigger(props: Props): import("react/jsx-runtime").JSX.Element;
export {};

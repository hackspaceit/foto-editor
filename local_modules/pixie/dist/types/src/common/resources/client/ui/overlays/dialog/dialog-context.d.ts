import React, { ComponentPropsWithRef } from 'react';
export type DialogType = 'modal' | 'popover' | 'tray';
export interface DialogContextValue<T = unknown> {
    labelId: string;
    descriptionId: string;
    type: DialogType;
    isDismissable?: boolean;
    close: (value?: T) => void;
    value: T;
    setValue: (value: T) => void;
    initialValue: T;
    formId: string;
    dialogProps: ComponentPropsWithRef<'div'>;
    disableInitialTransition?: boolean;
}
export declare const DialogContext: React.Context<DialogContextValue<unknown>>;
export declare function useDialogContext<T = unknown>(): DialogContextValue<T>;

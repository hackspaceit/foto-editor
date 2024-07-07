import React, { JSXElementConstructor } from 'react';
interface DialogStore<C extends JSXElementConstructor<unknown> = JSXElementConstructor<any>, D = React.ComponentProps<C>> {
    dialog: C | null;
    data: D;
    openDialog: (dialog: C, data?: D) => Promise<any>;
    closeActiveDialog: (value: any) => void;
    resolveClosePromise: null | ((value: any) => void);
}
export declare const useDialogStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<DialogStore<React.JSXElementConstructor<any>, any>>, "setState"> & {
    setState(nextStateOrUpdater: DialogStore<React.JSXElementConstructor<any>, any> | Partial<DialogStore<React.JSXElementConstructor<any>, any>> | ((state: import("immer").WritableDraft<DialogStore<React.JSXElementConstructor<any>, any>>) => void), shouldReplace?: boolean | undefined): void;
}>;
export declare const openDialog: (dialog: React.JSXElementConstructor<any>, data?: any) => Promise<any>;
export declare const closeDialog: (value?: any) => void;
export {};

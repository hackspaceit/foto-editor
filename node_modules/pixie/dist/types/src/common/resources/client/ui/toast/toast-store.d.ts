import { MessageDescriptor } from '../../i18n/message-descriptor';
import { ToastTimer } from './toast-timer';
type ToastType = 'danger' | 'default' | 'positive' | 'loading' | null;
type ToastPosition = 'bottom-center' | 'bottom-right';
interface ToastAction {
    label: string | MessageDescriptor;
    action: string;
}
export interface ToastOptions {
    type?: ToastType;
    action?: ToastAction;
    id?: string | number;
    duration?: number;
    position?: 'bottom-center' | 'bottom-right';
    disableExitAnimation?: boolean;
    disableEnterAnimation?: boolean;
}
interface Toast {
    timer?: ToastTimer | null;
    message: string | MessageDescriptor;
    type: ToastType;
    id: string | number;
    duration: number;
    action?: ToastAction;
    position: ToastPosition;
    disableExitAnimation?: boolean;
    disableEnterAnimation?: boolean;
}
interface ToastStore {
    toasts: Toast[];
    add: (message: Toast['message'], opts?: ToastOptions) => void;
    remove: (toastId: string | number) => void;
}
export declare const useToastStore: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<ToastStore>, "setState"> & {
    setState(nextStateOrUpdater: ToastStore | Partial<ToastStore> | ((state: import("immer").WritableDraft<ToastStore>) => void), shouldReplace?: boolean | undefined): void;
}>;
export declare function toastState(): ToastStore;
export {};

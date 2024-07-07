import { MessageDescriptor } from '../../i18n/message-descriptor';
import { ToastOptions } from './toast-store';
export declare function toast(message: MessageDescriptor | string, opts?: ToastOptions): void;
export declare namespace toast {
    var danger: (message: MessageDescriptor | string, opts?: ToastOptions) => void;
    var positive: (message: MessageDescriptor | string, opts?: ToastOptions) => void;
    var loading: (message: MessageDescriptor | string, opts?: ToastOptions) => void;
}

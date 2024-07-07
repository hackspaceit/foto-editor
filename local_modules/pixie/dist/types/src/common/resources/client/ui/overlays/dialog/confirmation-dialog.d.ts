import { ReactNode } from 'react';
interface Props {
    className?: string;
    title: ReactNode;
    body: ReactNode;
    confirm: ReactNode;
    isDanger?: boolean;
    isLoading?: boolean;
    onConfirm?: () => void;
}
export declare function ConfirmationDialog({ className, title, body, confirm, isDanger, isLoading, onConfirm, }: Props): import("react/jsx-runtime").JSX.Element;
export {};

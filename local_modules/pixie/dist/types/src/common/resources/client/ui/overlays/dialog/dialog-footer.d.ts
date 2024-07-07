import { ReactNode } from 'react';
import { DialogSize } from './dialog';
interface DialogFooterProps {
    children: ReactNode;
    startAction?: ReactNode;
    className?: string;
    dividerTop?: boolean;
    size?: DialogSize;
    padding?: string;
}
export declare function DialogFooter(props: DialogFooterProps): import("react/jsx-runtime").JSX.Element;
export {};

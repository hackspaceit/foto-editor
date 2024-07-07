import { DialogSize } from '@common/ui/overlays/dialog/dialog';
import { ReactNode } from 'react';
interface Props {
    title?: ReactNode;
    body: ReactNode;
    dialogSize?: DialogSize;
    className?: string;
}
export declare function InfoDialogTrigger({ title, body, dialogSize, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};

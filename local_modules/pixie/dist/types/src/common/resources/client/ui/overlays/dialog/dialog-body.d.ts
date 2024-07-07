import React, { ComponentProps, ReactNode } from 'react';
import { DialogSize } from './dialog';
interface DialogBodyProps extends ComponentProps<'div'> {
    children: ReactNode;
    className?: string;
    padding?: string | null;
    size?: DialogSize;
}
export declare const DialogBody: React.ForwardRefExoticComponent<Omit<DialogBodyProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};

import React, { ReactNode } from 'react';
interface TreeLabelProps {
    level?: number;
    node: any;
    icon?: ReactNode;
    label?: ReactNode;
    className?: string;
}
export declare const TreeLabel: React.ForwardRefExoticComponent<TreeLabelProps & React.RefAttributes<HTMLDivElement>>;
export {};

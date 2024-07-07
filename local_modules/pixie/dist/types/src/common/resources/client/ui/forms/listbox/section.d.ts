import React, { ReactNode } from 'react';
export interface ListboxSectionProps {
    label?: ReactNode;
    children: React.ReactNode;
    index?: number;
}
export declare function Section({ children, label, index }: ListboxSectionProps): import("react/jsx-runtime").JSX.Element;

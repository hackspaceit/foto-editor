import React from 'react';
type AdornmentProps = {
    children: React.ReactNode;
    direction: 'start' | 'end';
    position?: string;
    className?: string;
};
export declare function Adornment({ children, direction, className, position, }: AdornmentProps): import("react/jsx-runtime").JSX.Element | null;
export {};

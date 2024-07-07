import { ComponentPropsWithoutRef, ReactNode } from 'react';
export interface TabPanelsProps {
    children: ReactNode;
    className?: string;
}
export declare function TabPanels({ children, className }: TabPanelsProps): import("react/jsx-runtime").JSX.Element;
interface TabPanelProps extends ComponentPropsWithoutRef<'div'> {
    className?: string;
    children: ReactNode;
    index?: number;
}
export declare function TabPanel({ className, children, index, ...domProps }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
export {};

import { ReactNode } from 'react';
export interface TabListProps {
    children: ReactNode;
    center?: boolean;
    expand?: boolean;
    className?: string;
}
export declare function TabList({ children, center, expand, className }: TabListProps): import("react/jsx-runtime").JSX.Element;

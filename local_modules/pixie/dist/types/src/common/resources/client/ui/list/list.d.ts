import React, { ReactNode } from 'react';
import { ListItemBaseProps } from './list-item-base';
interface Props {
    className?: string;
    padding?: string;
    children: ReactNode;
    dataTestId?: string;
}
export declare function List({ children, className, padding, dataTestId }: Props): import("react/jsx-runtime").JSX.Element;
interface ListItemProps extends ListItemBaseProps {
    children: ReactNode;
    onSelected?: () => void;
    borderRadius?: string;
}
export declare const ListItem: React.ForwardRefExoticComponent<Omit<ListItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};

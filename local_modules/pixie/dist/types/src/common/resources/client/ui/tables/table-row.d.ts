import React, { ComponentPropsWithoutRef, JSXElementConstructor } from 'react';
import { TableDataItem } from './types/table-data-item';
export interface RowElementProps<T = TableDataItem> extends ComponentPropsWithoutRef<'tr'> {
    item: T & {
        isPlaceholder?: boolean;
    };
}
interface TableRowProps {
    item: TableDataItem;
    index: number;
    renderAs?: JSXElementConstructor<RowElementProps>;
    className?: string;
    style?: React.CSSProperties;
}
export declare function TableRow({ item, index, renderAs, className, style, }: TableRowProps): import("react/jsx-runtime").JSX.Element;
export {};

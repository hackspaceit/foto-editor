import { ComponentPropsWithoutRef, JSXElementConstructor, MutableRefObject, ReactElement } from 'react';
import { SortDescriptor } from './types/sort-descriptor';
import { RowElementProps } from './table-row';
import { TableSelectionStyle } from './table-context';
import { ColumnConfig } from '../../datatable/column-config';
import { TableDataItem } from './types/table-data-item';
export interface TableProps<T extends TableDataItem> extends ComponentPropsWithoutRef<'table'> {
    className?: string;
    columns: ColumnConfig<T>[];
    hideHeaderRow?: boolean;
    data: T[];
    meta?: any;
    tableRef?: MutableRefObject<HTMLTableElement>;
    selectedRows?: (number | string)[];
    defaultSelectedRows?: (number | string)[];
    onSelectionChange?: (keys: (number | string)[]) => void;
    sortDescriptor?: SortDescriptor;
    onSortChange?: (descriptor: SortDescriptor) => any;
    enableSorting?: boolean;
    onDelete?: (items: T[]) => void;
    enableSelection?: boolean;
    selectionStyle?: TableSelectionStyle;
    ariaLabelledBy?: string;
    onAction?: (item: T, index: number) => void;
    selectRowOnContextMenu?: boolean;
    renderRowAs?: JSXElementConstructor<RowElementProps<T>>;
    tableBody?: ReactElement<TableBodyProps>;
    hideBorder?: boolean;
    closeOnInteractOutside?: boolean;
    collapseOnMobile?: boolean;
    cellHeight?: string;
    headerCellHeight?: string;
}
export declare function Table<T extends TableDataItem>({ className, columns: userColumns, collapseOnMobile, hideHeaderRow, hideBorder, data, selectedRows: propsSelectedRows, defaultSelectedRows: propsDefaultSelectedRows, onSelectionChange: propsOnSelectionChange, sortDescriptor: propsSortDescriptor, onSortChange: propsOnSortChange, enableSorting, onDelete, enableSelection, selectionStyle, ariaLabelledBy, selectRowOnContextMenu, onAction, renderRowAs, tableBody, meta, tableRef: propsTableRef, closeOnInteractOutside, cellHeight, headerCellHeight, ...domProps }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export interface TableBodyProps {
    renderRowAs?: TableProps<TableDataItem>['renderRowAs'];
}

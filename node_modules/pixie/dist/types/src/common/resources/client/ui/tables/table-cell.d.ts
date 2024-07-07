import { TableDataItem } from './types/table-data-item';
interface TableCellProps {
    rowIsHovered: boolean;
    rowIndex: number;
    index: number;
    item: TableDataItem;
    id?: string;
}
export declare function TableCell({ rowIndex, rowIsHovered, index, item, id, }: TableCellProps): import("react/jsx-runtime").JSX.Element;
export {};

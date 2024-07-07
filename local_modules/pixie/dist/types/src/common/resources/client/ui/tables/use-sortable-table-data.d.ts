import { TableDataItem } from '@common/ui/tables/types/table-data-item';
import { TableProps } from '@common/ui/tables/table';
export declare function useSortableTableData<T extends TableDataItem>(data?: T[]): {
    data: T[];
    sortDescriptor: TableProps<T>['sortDescriptor'];
    onSortChange: TableProps<T>['onSortChange'];
};

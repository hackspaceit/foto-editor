import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { BackendResponse } from '@common/http/backend-response/backend-response';
import { PaginationResponse } from '@common/http/backend-response/pagination-response';
import { SortDescriptor } from '@common/ui/tables/types/sort-descriptor';
import { QueryKey } from '@tanstack/query-core/src/types';
export type UseInfiniteDataResult<T, E extends object = object> = UseInfiniteQueryResult<InfiniteData<PaginationResponse<T> & E>> & {
    items: T[];
    totalItems: number | null;
    noResults: boolean;
    isReloading: boolean;
    sortDescriptor: SortDescriptor;
    setSortDescriptor: (sortDescriptor: SortDescriptor) => void;
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
};
interface Response<T> extends BackendResponse {
    pagination: PaginationResponse<T>;
}
export interface UseInfiniteDataProps<T> {
    initialPage?: PaginationResponse<T> | null;
    queryKey: QueryKey;
    queryParams?: Record<string, string | number | null>;
    endpoint: string;
    defaultOrderBy?: SortDescriptor['orderBy'];
    defaultOrderDir?: SortDescriptor['orderDir'];
    willSortOrFilter?: boolean;
    paginate?: 'simple' | 'lengthAware' | 'cursor';
    transformResponse?: (response: Response<T>) => Response<T>;
}
export declare function useInfiniteData<T, E extends object = {}>(props: UseInfiniteDataProps<T>): UseInfiniteDataResult<T, E>;
export {};

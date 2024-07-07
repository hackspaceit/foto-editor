import { BackendResponse } from './backend-response';
export interface LengthAwarePaginationResponse<T = unknown> {
    data: T[];
    from: number;
    to: number;
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page?: number;
    prev_page?: number;
}
export interface SimplePaginationResponse<T = unknown> {
    data: T[];
    from: number;
    to: number;
    per_page: number;
    current_page: number;
    next_page?: number | null;
    prev_page?: number | null;
}
interface CursorPaginationResponse<T> {
    data: T[];
    next_cursor: string | null;
    per_page: number;
    prev_cursor: string | null;
}
export type PaginationResponse<T> = LengthAwarePaginationResponse<T> | SimplePaginationResponse<T> | CursorPaginationResponse<T>;
export declare const EMPTY_PAGINATION_RESPONSE: {
    pagination: {
        data: never[];
        from: number;
        to: number;
        per_page: number;
        current_page: number;
    };
};
export interface PaginatedBackendResponse<T> extends BackendResponse {
    pagination: PaginationResponse<T>;
}
export declare function hasPreviousPage(pagination: PaginationResponse<unknown>): boolean;
export declare function hasNextPage(pagination: PaginationResponse<unknown>): boolean;
export {};

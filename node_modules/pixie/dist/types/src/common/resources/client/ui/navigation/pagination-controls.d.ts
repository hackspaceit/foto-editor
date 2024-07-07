import { PaginationResponse } from '@common/http/backend-response/pagination-response';
export type PaginationControlsType = 'simple' | 'lengthAware';
interface Props {
    pagination: PaginationResponse<unknown> | undefined;
    className?: string;
    type?: PaginationControlsType;
    scrollToTop?: boolean;
}
export declare function PaginationControls({ pagination, className, type, scrollToTop, }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};

import { UseQueryResult } from '@tanstack/react-query';
import { BackendResponse } from '@common/http/backend-response/backend-response';
interface Props {
    query: UseQueryResult<BackendResponse>;
}
export declare function PageMetaTags({ query }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};

import React, { ReactNode } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
interface Props {
    query: UseQueryResult;
    show404?: boolean;
    redirectOn404?: string;
    loaderClassName?: string;
    loaderIsScreen?: boolean;
    loader?: ReactNode;
    delayedSpinner?: boolean;
}
export declare function PageStatus({ query, show404, loader, loaderClassName, loaderIsScreen, delayedSpinner, redirectOn404, }: Props): string | number | true | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null;
export {};

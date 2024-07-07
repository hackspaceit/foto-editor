import React, { ReactNode } from 'react';
import { UseInfiniteQueryResult } from '@tanstack/react-query/src/types';
export interface InfiniteScrollSentinelProps {
    loaderMarginTop?: string;
    children?: ReactNode;
    loadMoreExtraContent?: ReactNode;
    query: UseInfiniteQueryResult;
    style?: React.CSSProperties;
    className?: string;
    variant?: 'infiniteScroll' | 'loadMore';
    size?: 'sm' | 'md';
}
export declare function InfiniteScrollSentinel({ query: { isInitialLoading, fetchNextPage, isFetchingNextPage, hasNextPage }, children, loaderMarginTop, style, className, variant: _variant, loadMoreExtraContent, size, }: InfiniteScrollSentinelProps): import("react/jsx-runtime").JSX.Element;

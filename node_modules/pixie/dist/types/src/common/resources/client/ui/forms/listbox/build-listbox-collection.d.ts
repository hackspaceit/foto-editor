import { ReactElement } from 'react';
import { ListboxItemProps } from './item';
import { ListboxSectionProps } from './section';
import { ListBoxChildren } from './types';
export type ListboxCollection = Map<string | number, CollectionItem<any>>;
export type CollectionItem<T> = {
    index: number;
    textLabel: string;
    element: ReactElement<ListboxItemProps>;
    value: string | number;
    item?: T;
    isDisabled?: boolean;
    section?: ReactElement<ListboxSectionProps>;
};
type Props<T> = ListBoxChildren<T> & {
    inputValue?: string;
    maxItems?: number;
};
export declare const buildListboxCollection: (({ maxItems, children, items, inputValue }: Props<any>) => {
    collection: Map<string | number, CollectionItem<any>>;
    filteredCollection: ListboxCollection;
}) & import("nano-memoize").nanomemoize;
export {};

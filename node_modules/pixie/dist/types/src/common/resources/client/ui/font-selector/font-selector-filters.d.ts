import { FontSelectorState } from '@common/ui/font-selector/font-selector-state';
export interface FontSelectorFilterValue {
    query: string;
    category: string;
}
interface FiltersHeaderProps {
    state: FontSelectorState;
}
export declare function FontSelectorFilters({ state: { filters, setFilters }, }: FiltersHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};

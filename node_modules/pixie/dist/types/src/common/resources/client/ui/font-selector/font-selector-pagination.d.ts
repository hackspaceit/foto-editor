import { FontSelectorState } from '@common/ui/font-selector/font-selector-state';
interface FontSelectorPaginationProps {
    state: FontSelectorState;
}
export declare function FontSelectorPagination({ state: { currentPage, setCurrentPage, filteredFonts, pages }, }: FontSelectorPaginationProps): import("react/jsx-runtime").JSX.Element;
export {};

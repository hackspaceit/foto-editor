import { FontSelectorFilterValue } from '@common/ui/font-selector/font-selector-filters';
import { FontConfig } from '@common/http/value-lists';
export interface FontSelectorState extends UseFontSelectorProps {
    fonts: FontConfig[];
    filteredFonts: FontConfig[];
    pages: FontConfig[][];
    isLoading: boolean;
    filters: FontSelectorFilterValue;
    setFilters: (filters: FontSelectorFilterValue) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}
export interface UseFontSelectorProps {
    value?: FontConfig;
    onChange: (value: FontConfig) => void;
}
export declare function useFontSelectorState({ value, onChange, }: UseFontSelectorProps): FontSelectorState;

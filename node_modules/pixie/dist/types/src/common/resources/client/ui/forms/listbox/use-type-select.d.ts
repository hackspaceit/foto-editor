import React from 'react';
interface UseTypeSelectReturn {
    findMatchingItem: (e: React.KeyboardEvent, listContent: (string | null)[], fromIndex?: number | null) => number | null;
}
export declare function useTypeSelect(): UseTypeSelectReturn;
export {};

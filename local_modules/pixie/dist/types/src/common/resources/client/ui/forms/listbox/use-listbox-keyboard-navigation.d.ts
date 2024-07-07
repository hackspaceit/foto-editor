import React, { KeyboardEvent } from 'react';
import { UseListboxReturn } from './types';
export declare function useListboxKeyboardNavigation({ state: { isOpen, setIsOpen, selectedIndex, activeIndex, setInputValue, setActiveIndex, }, focusLoopingMode, collection, focusItem, handleItemSelection, allowCustomValue, }: UseListboxReturn): {
    handleTriggerKeyDown: (e: React.KeyboardEvent) => true | void;
    handleListboxKeyboardNavigation: (e: React.KeyboardEvent) => true | void;
    handleListboxSearchFieldKeydown: (e: KeyboardEvent<HTMLInputElement>) => void;
};

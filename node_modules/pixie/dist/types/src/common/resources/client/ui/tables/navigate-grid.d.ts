import React from 'react';
interface Props {
    cellCount: number;
    rowCount: number;
}
export declare function useGridNavigation(props: Props): {
    onKeyDown: React.KeyboardEventHandler<HTMLElement>;
};
export {};

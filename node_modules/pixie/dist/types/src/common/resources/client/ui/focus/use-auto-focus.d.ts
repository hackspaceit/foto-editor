import { RefObject } from 'react';
export interface AutoFocusProps {
    autoFocus?: boolean;
    autoSelectText?: boolean;
    disabled?: boolean;
}
export declare function useAutoFocus({ autoFocus, autoSelectText }: AutoFocusProps, ref: RefObject<HTMLElement>): void;

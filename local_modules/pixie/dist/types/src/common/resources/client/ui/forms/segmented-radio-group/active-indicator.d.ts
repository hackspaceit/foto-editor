import { RefObject } from 'react';
interface ActiveIndicatorProps {
    selectedValue?: string;
    labelsRef: RefObject<Record<string, HTMLLabelElement>>;
}
export declare function ActiveIndicator({ selectedValue, labelsRef, }: ActiveIndicatorProps): import("react/jsx-runtime").JSX.Element | null;
export {};

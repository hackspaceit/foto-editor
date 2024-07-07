import { ReactNode } from 'react';
import { UseSliderProps, UseSliderReturn } from './use-slider';
export interface BaseSliderProps extends UseSliderProps {
    slider: UseSliderReturn;
    children: ReactNode;
}
export declare function BaseSlider(props: BaseSliderProps): import("react/jsx-runtime").JSX.Element;

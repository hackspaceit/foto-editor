import { UseSliderProps } from './use-slider';
import React, { Ref } from 'react';
interface SliderProps extends UseSliderProps<number> {
    inputRef?: Ref<HTMLInputElement>;
    onBlur?: React.FocusEventHandler;
}
export declare function Slider({ inputRef, onBlur, ...props }: SliderProps): import("react/jsx-runtime").JSX.Element;
export interface FormSliderProps extends SliderProps {
    name: string;
}
export declare function FormSlider({ name, ...props }: FormSliderProps): import("react/jsx-runtime").JSX.Element;
export {};

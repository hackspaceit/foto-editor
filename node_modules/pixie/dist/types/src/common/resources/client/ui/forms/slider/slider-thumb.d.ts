import React, { Ref } from 'react';
import { UseSliderReturn } from './use-slider';
import { BaseSliderProps } from '@common/ui/forms/slider/base-slider';
interface SliderThumb {
    index: number;
    slider: UseSliderReturn;
    isDisabled?: boolean;
    ariaLabel?: string;
    inputRef?: Ref<HTMLInputElement>;
    onBlur?: React.FocusEventHandler;
    fillColor?: BaseSliderProps['fillColor'];
}
export declare function SliderThumb({ index, slider, isDisabled: isThumbDisabled, ariaLabel, inputRef, onBlur, fillColor, }: SliderThumb): import("react/jsx-runtime").JSX.Element;
export {};

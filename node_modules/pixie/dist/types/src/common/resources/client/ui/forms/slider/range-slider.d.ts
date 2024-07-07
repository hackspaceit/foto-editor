import { UseSliderProps } from './use-slider';
interface RangeSliderProps extends UseSliderProps<{
    start: number;
    end: number;
}> {
}
export declare function RangeSlider(props: RangeSliderProps): import("react/jsx-runtime").JSX.Element;
export {};

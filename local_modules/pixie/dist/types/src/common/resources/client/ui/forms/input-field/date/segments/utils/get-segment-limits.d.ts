import { DateValue } from '@internationalized/date';
export declare function getSegmentLimits(date: DateValue, type: string, options: Intl.ResolvedDateTimeFormatOptions): {
    value: number;
    placeholder: string;
    minValue: number;
    maxValue: number;
} | {
    value?: undefined;
    placeholder?: undefined;
    minValue?: undefined;
    maxValue?: undefined;
};

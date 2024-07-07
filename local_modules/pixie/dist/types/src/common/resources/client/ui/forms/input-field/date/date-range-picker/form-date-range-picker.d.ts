import { ZonedDateTime } from '@internationalized/date';
import { DateRangeValue } from './date-range-value';
import { DateRangePickerProps } from './date-range-picker';
export interface AbsoluteDateRange {
    start?: string;
    end?: string;
    preset?: number;
}
interface FormDateRange {
    start?: string | ZonedDateTime;
    end?: string | ZonedDateTime;
    preset?: number;
}
export interface FormDateRangePickerProps extends DateRangePickerProps {
    name: string;
}
export declare function FormDateRangePicker(props: FormDateRangePickerProps): import("react/jsx-runtime").JSX.Element;
export declare function absoluteRangeToDateRange(props: FormDateRange | null): Partial<DateRangeValue>;
export declare function dateRangeToAbsoluteRange({ start, end, preset, }?: Partial<DateRangeValue>): AbsoluteDateRange;
export {};

import { BaseDatePickerState, DatePickerValueProps } from '../date-picker/use-date-picker-state';
import { DateRangeValue } from './date-range-value';
export interface IsPlaceholderValue {
    start: boolean;
    end: boolean;
}
export type DateRangePickerState = BaseDatePickerState<DateRangeValue, IsPlaceholderValue>;
export declare function useDateRangePickerState(props: DatePickerValueProps<Partial<DateRangeValue>, DateRangeValue>): DateRangePickerState;

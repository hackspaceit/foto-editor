import { CalendarDate } from '@internationalized/date';
import { DatePickerState } from '../date-picker/use-date-picker-state';
import { DateRangePickerState } from '../date-range-picker/use-date-range-picker-state';
export interface CalendarMonthProps {
    state: DatePickerState | DateRangePickerState;
    startDate: CalendarDate;
    isFirst: boolean;
    isLast: boolean;
}
export declare function CalendarMonth({ startDate, state, isFirst, isLast, }: CalendarMonthProps): import("react/jsx-runtime").JSX.Element;

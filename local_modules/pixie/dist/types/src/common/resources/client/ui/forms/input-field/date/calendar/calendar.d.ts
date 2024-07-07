import { DatePickerState } from '../date-picker/use-date-picker-state';
import { DateRangePickerState } from '../date-range-picker/use-date-range-picker-state';
interface CalendarProps {
    state: DatePickerState | DateRangePickerState;
    visibleMonths?: 1 | 2;
}
export declare function Calendar({ state, visibleMonths }: CalendarProps): import("react/jsx-runtime").JSX.Element;
export {};

import { CalendarDate, DateValue } from '@internationalized/date';
import { DatePickerState } from '../date-picker/use-date-picker-state';
import { DateRangePickerState } from '../date-range-picker/use-date-range-picker-state';
interface CalendarCellProps {
    date: CalendarDate;
    currentMonth: DateValue;
    state: DatePickerState | DateRangePickerState;
}
export declare function CalendarCell({ date, currentMonth, state: { dayIsActive, dayIsHighlighted, dayIsRangeStart, dayIsRangeEnd, getCellProps, timezone, min, max, }, }: CalendarCellProps): import("react/jsx-runtime").JSX.Element;
export {};

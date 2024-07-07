import { HTMLAttributes } from 'react';
import { CalendarDate, DateValue, ZonedDateTime } from '@internationalized/date';
export type Granularity = 'day' | 'minute';
export type DatePickerState = BaseDatePickerState;
export interface BaseDatePickerState<T = ZonedDateTime, P = boolean> {
    timezone: string;
    granularity: Granularity;
    selectedValue: T;
    setSelectedValue: (value: T) => void;
    calendarIsOpen: boolean;
    setCalendarIsOpen: (isOpen: boolean) => void;
    calendarDates: CalendarDate[];
    setCalendarDates: (dates: CalendarDate[]) => void;
    dayIsActive: (day: CalendarDate) => boolean;
    dayIsHighlighted: (day: CalendarDate) => boolean;
    dayIsRangeStart: (day: CalendarDate) => boolean;
    dayIsRangeEnd: (day: CalendarDate) => boolean;
    isPlaceholder: P;
    setIsPlaceholder: (value: P) => void;
    clear: () => void;
    min?: ZonedDateTime;
    max?: ZonedDateTime;
    closeDialogOnSelection: boolean;
    getCellProps: (date: CalendarDate, isSameMonth: boolean) => HTMLAttributes<HTMLElement>;
}
export interface DatePickerValueProps<V, CV = V> {
    value?: V | null | '';
    defaultValue?: V | null;
    onChange?: (value: CV | null) => void;
    min?: DateValue;
    max?: DateValue;
    granularity?: Granularity;
    closeDialogOnSelection?: boolean;
}
export declare function useDatePickerState(props: DatePickerValueProps<ZonedDateTime>): BaseDatePickerState;

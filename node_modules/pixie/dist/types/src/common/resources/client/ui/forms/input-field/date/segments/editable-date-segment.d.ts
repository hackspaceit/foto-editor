import { ComponentPropsWithoutRef } from 'react';
import { ZonedDateTime } from '@internationalized/date';
import { DatePickerState } from '../date-picker/use-date-picker-state';
import { DateRangePickerState } from '../date-range-picker/use-date-range-picker-state';
export interface EditableSegment {
    type: 'day' | 'dayPeriod' | 'hour' | 'minute' | 'month' | 'second' | 'year';
    text: string;
    value: number;
    minValue: number;
    maxValue: number;
    minLength: number;
}
interface DatePickerSegmentProps {
    segment: EditableSegment;
    domProps?: ComponentPropsWithoutRef<'div'>;
    state: DatePickerState | DateRangePickerState;
    value: ZonedDateTime;
    onChange: (newValue: ZonedDateTime) => void;
    isPlaceholder?: boolean;
}
export declare function EditableDateSegment({ segment, domProps, value, onChange, isPlaceholder, state: { timezone, calendarIsOpen, setCalendarIsOpen }, }: DatePickerSegmentProps): import("react/jsx-runtime").JSX.Element;
export {};

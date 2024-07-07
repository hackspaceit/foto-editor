import { ComponentPropsWithoutRef } from 'react';
import { ZonedDateTime } from '@internationalized/date';
import { DatePickerState } from '../date-picker/use-date-picker-state';
import { DateRangePickerState } from '../date-range-picker/use-date-range-picker-state';
interface DateSegmentListProps {
    segmentProps?: ComponentPropsWithoutRef<'div'>;
    state: DatePickerState | DateRangePickerState;
    value: ZonedDateTime;
    onChange: (newValue: ZonedDateTime) => void;
    isPlaceholder?: boolean;
}
export declare function DateSegmentList({ segmentProps, state, value, onChange, isPlaceholder, }: DateSegmentListProps): import("react/jsx-runtime").JSX.Element;
export {};

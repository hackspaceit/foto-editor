import { DateValue, ZonedDateTime } from '@internationalized/date';
import type { DatePickerValueProps } from './date-picker/use-date-picker-state';
import { DateRangeValue } from './date-range-picker/date-range-value';
export declare function useBaseDatePickerState(selectedDate: DateValue, props: DatePickerValueProps<ZonedDateTime> | DatePickerValueProps<Partial<DateRangeValue>, DateRangeValue>): {
    timezone: string;
    granularity: import("./date-picker/use-date-picker-state").Granularity;
    min: ZonedDateTime | undefined;
    max: ZonedDateTime | undefined;
    calendarIsOpen: boolean;
    setCalendarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closeDialogOnSelection: boolean;
};

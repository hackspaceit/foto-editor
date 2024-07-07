import { DatePickerFieldProps } from './date-picker-field';
import { DatePickerValueProps } from '../date-picker/use-date-picker-state';
import { DateRangeValue } from './date-range-value';
export interface DateRangePickerProps extends DatePickerValueProps<Partial<DateRangeValue>>, Omit<DatePickerFieldProps, 'children'> {
}
export declare function DateRangePicker(props: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;

import { ZonedDateTime } from '@internationalized/date';
import { DatePickerValueProps } from './use-date-picker-state';
import { DatePickerFieldProps } from '../date-range-picker/date-picker-field';
export interface DatePickerProps extends Omit<DatePickerFieldProps, 'children'>, DatePickerValueProps<ZonedDateTime> {
}
export declare function DatePicker({ showCalendarFooter, ...props }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
interface FormDatePickerProps extends DatePickerProps {
    name: string;
}
export declare function FormDatePicker(props: FormDatePickerProps): import("react/jsx-runtime").JSX.Element;
export {};

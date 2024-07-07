import React, { FocusEventHandler, Ref } from 'react';
import { FieldProps } from '../../field';
export interface DatePickerFieldProps extends Omit<FieldProps, 'fieldClassNames'> {
    inputRef?: Ref<HTMLDivElement>;
    onBlur?: FocusEventHandler;
    showCalendarFooter?: boolean;
}
export declare const DatePickerField: React.ForwardRefExoticComponent<DatePickerFieldProps & React.RefAttributes<HTMLDivElement>>;

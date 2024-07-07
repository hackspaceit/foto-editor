import { CalendarDate, DateValue } from '@internationalized/date';
export declare function getDefaultGranularity(date: DateValue): "day" | "minute";
export declare function dateIsInvalid(date: CalendarDate, min?: DateValue, max?: DateValue): boolean;

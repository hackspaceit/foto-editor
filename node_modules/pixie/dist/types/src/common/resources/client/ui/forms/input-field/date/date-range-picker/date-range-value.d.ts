import { ZonedDateTime } from '@internationalized/date';
export type DateRangeValue = {
    start: ZonedDateTime;
    end: ZonedDateTime;
    preset?: number;
    compareStart?: ZonedDateTime;
    compareEnd?: ZonedDateTime;
    comparePreset?: number;
};
export declare function dateRangeValueToPayload(value: {
    dateRange?: DateRangeValue;
    [key: string]: any;
}): {
    [x: string]: any;
    dateRange?: DateRangeValue;
};

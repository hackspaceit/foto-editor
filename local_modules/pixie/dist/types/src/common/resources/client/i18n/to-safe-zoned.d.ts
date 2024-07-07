import { CalendarDate, CalendarDateTime, Disambiguation, ZonedDateTime } from '@internationalized/date';
export declare function toSafeZoned(date: CalendarDate | CalendarDateTime | ZonedDateTime, timeZone: string, disambiguation?: Disambiguation): ZonedDateTime;

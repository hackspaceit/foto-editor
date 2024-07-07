import { DateValue } from '@internationalized/date';
import { DateFormatPresets } from '@common/i18n/formatted-date';
interface FormattedDateTimeRangeProps {
    start?: string | DateValue | Date;
    end?: string | DateValue | Date;
    options?: Intl.DateTimeFormatOptions;
    preset?: keyof typeof DateFormatPresets;
}
export declare const FormattedDateTimeRange: React.MemoExoticComponent<({ start, end, options, preset }: FormattedDateTimeRangeProps) => import("react/jsx-runtime").JSX.Element | null>;
export {};

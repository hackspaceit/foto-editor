import { DateValue } from '@internationalized/date';
export declare const DateFormatPresets: Record<'numeric' | 'short' | 'long' | 'timestamp', Intl.DateTimeFormatOptions>;
interface FormattedDateProps {
    date?: string | DateValue | Date;
    options?: Intl.DateTimeFormatOptions;
    preset?: keyof typeof DateFormatPresets;
}
export declare const FormattedDate: React.MemoExoticComponent<({ date, options, preset }: FormattedDateProps) => import("react/jsx-runtime").JSX.Element | null>;
export {};

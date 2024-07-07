import { DateValue } from '@internationalized/date';
interface FormattedDateProps {
    date?: string | DateValue | Date;
    style?: Intl.RelativeTimeFormatStyle;
}
export declare const FormattedRelativeTime: React.MemoExoticComponent<({ date, style }: FormattedDateProps) => import("react/jsx-runtime").JSX.Element | null>;
export {};

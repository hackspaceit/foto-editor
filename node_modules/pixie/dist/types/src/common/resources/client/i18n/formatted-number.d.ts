import { NumberFormatOptions } from '@internationalized/number';
interface FormattedNumberProps extends NumberFormatOptions {
    value: number;
}
export declare const FormattedNumber: React.MemoExoticComponent<({ value, ...options }: FormattedNumberProps) => import("react/jsx-runtime").JSX.Element>;
export {};

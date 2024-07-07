import { Price } from '../billing/price';
interface FormattedPriceProps {
    price?: Omit<Price, 'id'>;
    variant?: 'slash' | 'separateLine';
    className?: string;
    priceClassName?: string;
    periodClassName?: string;
}
export declare function FormattedPrice({ price, variant, className, priceClassName, periodClassName, }: FormattedPriceProps): import("react/jsx-runtime").JSX.Element | null;
export {};

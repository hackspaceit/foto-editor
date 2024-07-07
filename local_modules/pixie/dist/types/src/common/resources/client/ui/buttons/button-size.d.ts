import { ButtonVariant } from './get-shared-button-style';
export type ButtonSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null;
interface Props {
    padding?: string;
    equalWidth?: boolean;
    variant?: ButtonVariant;
}
export declare function getButtonSizeStyle(size?: ButtonSize, { padding, equalWidth, variant }?: Props): string;
export {};

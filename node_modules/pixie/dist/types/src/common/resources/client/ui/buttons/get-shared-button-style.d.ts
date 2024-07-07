export type ButtonVariant = 'text' | 'flat' | 'raised' | 'outline' | 'link' | null;
export type ButtonColor = null | 'primary' | 'danger' | 'positive' | 'paper' | 'chip' | 'white';
interface SharedButtonStyleProps {
    variant?: ButtonVariant;
    color?: ButtonColor;
    border?: string;
    shadow?: string;
    whitespace?: string;
    display?: string;
}
export declare function getSharedButtonStyle(props: SharedButtonStyleProps): (string | boolean | null | undefined)[];
export {};

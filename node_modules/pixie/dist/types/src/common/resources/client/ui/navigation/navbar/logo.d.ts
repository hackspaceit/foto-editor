import { NavbarProps } from '@common/ui/navigation/navbar/navbar';
interface LogoProps {
    color?: NavbarProps['color'];
    logoColor?: NavbarProps['logoColor'];
    isDarkMode?: boolean;
    className?: string;
}
export declare function Logo({ color, logoColor, isDarkMode, className }: LogoProps): import("react/jsx-runtime").JSX.Element | null;
export {};

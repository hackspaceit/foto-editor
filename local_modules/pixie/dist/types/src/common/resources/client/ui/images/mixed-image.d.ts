import { ComponentType, HTMLAttributes } from 'react';
import { SvgIconProps } from '../../icons/svg-icon';
interface Props extends HTMLAttributes<HTMLElement> {
    src: string | ComponentType<SvgIconProps>;
    className?: string;
}
export declare const MixedImage: React.MemoExoticComponent<({ src, className, ...domProps }: Props) => import("react/jsx-runtime").JSX.Element | null>;
export {};

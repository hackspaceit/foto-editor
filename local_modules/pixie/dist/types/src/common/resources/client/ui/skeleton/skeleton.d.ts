interface SkeletonProps {
    variant?: 'avatar' | 'text' | 'rect' | 'icon';
    animation?: 'pulsate' | 'wave' | null;
    className?: string;
    size?: string;
    display?: string;
    radius?: string;
    style?: React.CSSProperties;
}
export declare function Skeleton({ variant, animation, size, className, display, radius, style, }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
export {};

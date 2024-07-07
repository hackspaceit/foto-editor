import { ReactElement } from 'react';
import type { ChipProps } from './chip';
export interface ChipListProps {
    className?: string;
    children?: ReactElement | ReactElement[];
    size?: ChipProps['size'];
    radius?: ChipProps['radius'];
    color?: ChipProps['color'];
    selectable?: ChipProps['selectable'];
    wrap?: boolean;
}
export declare function ChipList({ className, children, size, color, radius, selectable, wrap, }: ChipListProps): import("react/jsx-runtime").JSX.Element;

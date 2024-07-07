import React, { HTMLAttributes } from 'react';
interface UsePointerEventsReturn {
    domProps: HTMLAttributes<HTMLElement>;
}
export interface UsePointerEventsProps {
    onMoveStart?: (e: PointerEvent, el: HTMLElement) => false | void;
    onMove?: (e: PointerEvent, deltaX: number, deltaY: number) => void;
    onMoveEnd?: (e: PointerEvent) => void;
    onPointerDown?: (e: React.PointerEvent) => void | false;
    onPointerUp?: (e: PointerEvent, el: HTMLElement) => void;
    onPress?: (e: PointerEvent, el: HTMLElement) => void;
    onLongPress?: (e: PointerEvent | React.PointerEvent, el: HTMLElement) => void;
    preventDefault?: boolean;
    stopPropagation?: boolean;
    minimumMovement?: number;
}
export declare function usePointerEvents({ onMoveStart, onMove, onMoveEnd, minimumMovement, preventDefault, stopPropagation, onPress, onLongPress, ...props }: UsePointerEventsProps): UsePointerEventsReturn;
export {};

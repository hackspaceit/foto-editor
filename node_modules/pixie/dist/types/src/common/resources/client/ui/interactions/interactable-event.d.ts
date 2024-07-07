import React from 'react';
type NativeEvent = React.PointerEvent | PointerEvent | React.DragEvent<HTMLElement> | DragEvent;
export interface InteractableEvent {
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    rect: InteractableRect;
    nativeEvent: NativeEvent;
}
export interface InteractableRect {
    left: number;
    top: number;
    width: number;
    height: number;
    angle?: number;
}
export declare function interactableEvent({ e, rect, deltaX, deltaY, }: {
    e: NativeEvent;
    rect: InteractableRect;
    deltaX?: number;
    deltaY?: number;
}): InteractableEvent;
export {};

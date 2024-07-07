import React, { RefObject } from 'react';
import { InteractableEvent } from '../interactable-event';
import { NativeFileDraggable } from './use-droppable';
export type DragPreviewRenderer = (draggable: ConnectedDraggable, callback: (node: HTMLElement) => void) => void;
export type DraggableId = string | number | object;
export interface ConnectedDraggable<T = any> {
    type: string;
    id: DraggableId;
    getData: () => T;
    ref: RefObject<HTMLElement>;
}
export type MixedDraggable = ConnectedDraggable | NativeFileDraggable;
interface UseDragProps extends ConnectedDraggable {
    disabled?: boolean;
    onDragStart?: (e: InteractableEvent, target: ConnectedDraggable) => void;
    onDragMove?: (e: InteractableEvent, target: ConnectedDraggable) => void;
    onDragEnd?: (e: InteractableEvent, target: ConnectedDraggable) => void;
    preview?: RefObject<DragPreviewRenderer>;
    hidePreview?: boolean;
}
export declare function useDraggable({ id, disabled, ref, preview, hidePreview, ...options }: UseDragProps): {
    draggableProps: {
        draggable: boolean;
        onDragStart: (e: React.DragEvent<HTMLElement>) => void;
        onDragEnd: (e: React.DragEvent<HTMLElement>) => void;
        onPointerDown: (e: React.PointerEvent) => void;
    };
    dragHandleRef: React.RefObject<HTMLButtonElement>;
};
export {};

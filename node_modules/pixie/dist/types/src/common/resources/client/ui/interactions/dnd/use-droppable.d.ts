import React, { RefObject } from 'react';
import { InteractableRect } from '../interactable-event';
import { DraggableId, MixedDraggable } from './use-draggable';
import { UploadedFile } from '@common/uploads/uploaded-file';
export interface ConnectedDroppable {
    id: DraggableId;
    rect?: InteractableRect;
    disabled?: boolean;
    ref: RefObject<HTMLElement>;
}
export interface NativeFileDraggable {
    type: 'nativeFile';
    el: null;
    ref: null;
    getData: () => Promise<UploadedFile[]>;
}
interface UseDroppableProps<T extends HTMLElement> {
    id: DraggableId;
    disabled?: boolean;
    types: ('nativeFile' | string)[];
    ref: RefObject<T>;
    allowDragEventsFromItself?: boolean;
    onDragEnter?: (target: MixedDraggable) => void;
    onDragLeave?: (target: MixedDraggable) => void;
    onDragOver?: (target: MixedDraggable, e: React.DragEvent<HTMLElement>) => void;
    onDropActivate?: (e: MixedDraggable) => void;
    onDrop?: (target: MixedDraggable) => void | Promise<void> | false;
    acceptsDrop?: (target: MixedDraggable) => boolean;
}
export declare function useDroppable<T extends HTMLElement>({ id, disabled, ref, ...options }: UseDroppableProps<T>): {
    droppableProps: {};
};
export {};

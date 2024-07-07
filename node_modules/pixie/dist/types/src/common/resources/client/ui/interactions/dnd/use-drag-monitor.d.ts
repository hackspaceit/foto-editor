import { InteractableEvent } from '../interactable-event';
import { DragSessionStatus } from './drag-state';
import { ConnectedDraggable } from './use-draggable';
export interface DragMonitor {
    type: string;
    onDragStart?: (e: InteractableEvent, dragTarget: ConnectedDraggable) => void;
    onDragMove?: (e: InteractableEvent, dragTarget: ConnectedDraggable) => void;
    onDragEnd?: (e: InteractableEvent, dragTarget: ConnectedDraggable, status: DragSessionStatus) => void;
}
export declare function useDragMonitor(monitor: DragMonitor): void;

import { DragMonitor } from './use-drag-monitor';
import { ConnectedDraggable, DraggableId } from './use-draggable';
import { ConnectedDroppable } from './use-droppable';
export type DragSessionStatus = 'dropSuccess' | 'dropFail' | 'dragging' | 'inactive';
export interface DragSession {
    dragTargetId?: DraggableId;
    status: DragSessionStatus;
}
export declare const draggables: Map<DraggableId, ConnectedDraggable<any>>;
export declare const droppables: Map<DraggableId, ConnectedDroppable>;
export declare const dragMonitors: Map<DraggableId, DragMonitor>;
export declare const dragSession: DragSession;

import { ConnectedMouseSelectable } from './mouse-selection/use-mouse-selectable';
import { DraggableId } from './use-draggable';
import { ConnectedDroppable } from './use-droppable';
export declare function updateRects(targets: Map<DraggableId, ConnectedDroppable | ConnectedMouseSelectable>): void;

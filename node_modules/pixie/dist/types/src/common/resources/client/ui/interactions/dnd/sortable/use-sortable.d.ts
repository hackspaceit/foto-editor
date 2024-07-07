import { DraggableId, DragPreviewRenderer } from '../use-draggable';
import { RefObject } from 'react';
export interface SortSession {
    sortables: DraggableId[];
    activeSortable: DraggableId;
    activeIndex: number;
    finalIndex: number;
    dropPosition: DropPosition;
    linePreviewEl?: HTMLElement;
    scrollParent?: Element;
    scrollListener: () => void;
    ref: RefObject<HTMLElement>;
}
export type DropPosition = 'before' | 'after' | null;
type StrategyName = 'line' | 'liveSort' | 'moveNode';
export interface UseSortableProps {
    item: DraggableId;
    items: DraggableId[];
    onSortStart?: () => void;
    onSortEnd?: (oldIndex: number, newIndex: number) => void;
    onDragEnd?: () => void;
    onDropPositionChange?: (dropPosition: DropPosition) => void;
    ref: RefObject<HTMLElement>;
    type: string;
    preview?: RefObject<DragPreviewRenderer>;
    strategy?: StrategyName;
    disabled?: boolean;
}
export declare function useSortable({ item, items, type, ref, onSortEnd, onSortStart, onDragEnd, preview, disabled, onDropPositionChange, strategy, }: UseSortableProps): {
    sortableProps: {
        draggable: boolean;
        onDragStart: (e: React.DragEvent<HTMLElement>) => void;
        onDragEnd: (e: React.DragEvent<HTMLElement>) => void;
        onPointerDown: (e: React.PointerEvent) => void;
    };
    dragHandleRef: RefObject<HTMLButtonElement>;
};
export {};

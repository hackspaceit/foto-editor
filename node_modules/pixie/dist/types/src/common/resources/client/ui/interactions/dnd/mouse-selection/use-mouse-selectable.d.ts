import { RefObject } from 'react';
import { InteractableRect } from '../../interactable-event';
import { DraggableId } from '../use-draggable';
export interface ConnectedMouseSelectable {
    id: DraggableId;
    onSelected?: () => void;
    onDeselected?: () => void;
    ref: RefObject<HTMLElement>;
    rect?: InteractableRect;
}
export declare const mouseSelectables: Map<DraggableId, ConnectedMouseSelectable>;
export declare function useMouseSelectable(options: ConnectedMouseSelectable): void;

import { RefObject } from 'react';
import { InteractableEvent, InteractableRect } from './interactable-event';
export interface UseMoveProps {
    restrictWithinBoundary?: boolean;
    minimumMovement?: number;
    boundaryRef?: RefObject<HTMLElement> | null;
    boundaryRect?: InteractableRect;
    onMoveStart?: (e: InteractableEvent) => void;
    onMove?: (e: InteractableEvent) => void;
    onMoveEnd?: (e: InteractableEvent) => void;
}
export declare function useMove({ boundaryRef, boundaryRect, minimumMovement, restrictWithinBoundary, ...props }: UseMoveProps): {
    moveProps: React.HTMLAttributes<HTMLElement>;
};

import { InteractableRect } from '../interactable-event';
export declare function restrictResizableWithinBoundary(rect: InteractableRect, boundaryRect: InteractableRect): {
    left: number;
    top: number;
    width: number;
    height: number;
    angle?: number;
};

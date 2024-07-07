import { RefObject } from 'react';
import { InteractableEvent, InteractableRect } from './interactable-event';
export declare enum resizeHandlePosition {
    topLeft = "topLeft",
    topRight = "topRight",
    bottomLeft = "bottomLeft",
    bottomRight = "bottomRight"
}
type AspectRatio = number | null | undefined;
type InitialAspectRatio = AspectRatio | 'initial';
interface UseResizeProps {
    boundaryRect?: InteractableRect;
    boundaryRef?: RefObject<HTMLElement> | null;
    restrictWithinBoundary?: boolean;
    aspectRatio?: InitialAspectRatio;
    onResizeStart?: (e: InteractableEvent) => void;
    onResize?: (e: InteractableEvent) => void;
    onResizeEnd?: (e: InteractableEvent) => void;
    minWidth?: number;
    minHeight?: number;
}
export declare function useResize({ aspectRatio, boundaryRef, boundaryRect, restrictWithinBoundary, minWidth, minHeight, ...props }: UseResizeProps): {
    resizeProps: React.HTMLAttributes<HTMLElement>;
};
export {};

import { RefObject } from 'react';
import { InteractableEvent, InteractableRect } from './interactable-event';
interface UseRotateProps {
    boundaryRect?: InteractableRect;
    boundaryRef?: RefObject<HTMLElement> | null;
    onRotateStart?: (e: InteractableEvent) => void;
    onRotate?: (e: InteractableEvent) => void;
    onRotateEnd?: (e: InteractableEvent) => void;
}
export declare function useRotate(props: UseRotateProps): {
    rotateProps: React.HTMLAttributes<HTMLElement>;
};
export {};

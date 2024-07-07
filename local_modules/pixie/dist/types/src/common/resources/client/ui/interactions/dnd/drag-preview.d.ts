import React from 'react';
import { ConnectedDraggable, DragPreviewRenderer } from './use-draggable';
export interface DragPreviewProps {
    children: (draggable: ConnectedDraggable) => JSX.Element;
}
export declare const DragPreview: React.ForwardRefExoticComponent<DragPreviewProps & React.RefAttributes<DragPreviewRenderer>>;

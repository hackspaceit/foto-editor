import { ReactNode } from 'react';
import { FileEntry } from '../file-entry';
export interface FilePreviewContainerProps {
    entries: FileEntry[];
    activeIndex?: number;
    defaultActiveIndex?: number;
    onActiveIndexChange?: (index: number) => void;
    onClose?: () => void;
    showHeader?: boolean;
    headerActionsLeft?: ReactNode;
    className?: string;
    allowDownload?: boolean;
}
export declare function FilePreviewContainer({ entries, onClose, showHeader, className, headerActionsLeft, allowDownload, ...props }: FilePreviewContainerProps): import("react/jsx-runtime").JSX.Element | null;

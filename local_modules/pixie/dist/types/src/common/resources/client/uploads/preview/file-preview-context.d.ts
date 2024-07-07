import React from 'react';
import { FileEntry } from '../file-entry';
export interface FilePreviewContextValue {
    entries: FileEntry[];
    activeIndex: number;
}
export declare const FilePreviewContext: React.Context<FilePreviewContextValue>;

import React from 'react';
import { FileEntry } from '../file-entry';
export declare const FileEntryUrlsContext: React.Context<Record<string, string | number | null | undefined>>;
export declare function useFileEntryUrls(entry?: FileEntry, options?: {
    thumbnail?: boolean;
    downloadHashes?: string[];
}): {
    previewUrl?: string;
    downloadUrl?: string;
};

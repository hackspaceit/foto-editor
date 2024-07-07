import { UploadedFile } from '../uploaded-file';
import { UploadStrategy, UploadStrategyConfig } from './strategy/upload-strategy';
import { MessageDescriptor } from '../../i18n/message-descriptor';
import { FileEntry } from '../file-entry';
import { Settings } from '../../core/settings/settings';
import { ProgressTimeout } from './progress-timeout';
export interface FileUpload {
    file: UploadedFile;
    percentage: number;
    bytesUploaded: number;
    status: 'pending' | 'inProgress' | 'aborted' | 'failed' | 'completed';
    errorMessage?: string | MessageDescriptor | null;
    entry?: FileEntry;
    request?: UploadStrategy;
    timer?: ProgressTimeout;
    options: UploadStrategyConfig;
    meta?: unknown;
}
interface State {
    concurrency: number;
    fileUploads: Map<string, FileUpload>;
    activeUploadsCount: number;
    completedUploadsCount: number;
}
interface Actions {
    uploadMultiple: (files: (File | UploadedFile)[] | FileList, options?: Omit<UploadStrategyConfig, 'onProgress' | 'showToastOnRestrictionFail'>) => string[];
    uploadSingle: (file: File | UploadedFile, options?: UploadStrategyConfig) => string;
    clearInactive: () => void;
    abortUpload: (id: string) => void;
    updateFileUpload: (id: string, state: Partial<FileUpload>) => void;
    getUpload: (id: string) => FileUpload | undefined;
    runQueue: () => void;
    reset: () => void;
}
export type FileUploadState = State & Actions;
interface StoreProps {
    settings: Settings;
}
export declare const createFileUploadStore: ({ settings }: StoreProps) => import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<FileUploadState>, "setState"> & {
    setState(nextStateOrUpdater: FileUploadState | Partial<FileUploadState> | ((state: import("immer").WritableDraft<FileUploadState>) => void), shouldReplace?: boolean | undefined): void;
}>;
export {};

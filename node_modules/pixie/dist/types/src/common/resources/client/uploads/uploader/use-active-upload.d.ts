import { UploadedFile } from '../uploaded-file';
import { UploadStrategyConfig } from './strategy/upload-strategy';
interface DeleteEntryProps {
    onSuccess: () => void;
    entryPath?: string;
}
export declare function useActiveUpload(): {
    uploadFile: (file: File | UploadedFile, config?: UploadStrategyConfig) => void;
    selectAndUploadFile: (config?: UploadStrategyConfig) => Promise<UploadedFile>;
    percentage: number;
    uploadStatus: "failed" | "pending" | "inProgress" | "aborted" | "completed" | undefined;
    entry: import("../file-entry").FileEntry | undefined;
    deleteEntry: ({ onSuccess, entryPath }: DeleteEntryProps) => void;
    isDeletingEntry: boolean;
    activeUpload: import("./file-upload-store").FileUpload | null | undefined;
    abortUpload: () => void;
};
export {};

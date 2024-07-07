import { UploadStrategy } from './strategy/upload-strategy';
import { FileUpload, FileUploadState } from './file-upload-store';
export declare function startUploading(upload: FileUpload, state: FileUploadState): Promise<UploadStrategy | null>;

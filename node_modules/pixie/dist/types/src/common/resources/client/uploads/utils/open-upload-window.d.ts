import { UploadInputConfig } from '../types/upload-input-config';
import { UploadedFile } from '../uploaded-file';
/**
 * Open browser dialog for uploading files and
 * resolve promise with uploaded files.
 */
export declare function openUploadWindow(config?: UploadInputConfig): Promise<UploadedFile[]>;

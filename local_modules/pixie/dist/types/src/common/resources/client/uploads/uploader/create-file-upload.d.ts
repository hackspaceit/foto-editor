import { UploadedFile } from '../uploaded-file';
import { UploadStrategyConfig } from './strategy/upload-strategy';
import { FileUpload } from './file-upload-store';
export declare function createUpload(file: UploadedFile | File, options?: UploadStrategyConfig): FileUpload;

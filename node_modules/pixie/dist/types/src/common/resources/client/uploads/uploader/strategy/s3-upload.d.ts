import { UploadStrategy, UploadStrategyConfig } from './upload-strategy';
import { UploadedFile } from '../../uploaded-file';
export declare class S3Upload implements UploadStrategy {
    private file;
    private config;
    private abortController;
    private presignedRequest?;
    constructor(file: UploadedFile, config: UploadStrategyConfig);
    start(): Promise<void>;
    abort(): Promise<void>;
    private presignPostUrl;
    private uploadFileToS3;
    private createFileEntry;
    static create(file: UploadedFile, config: UploadStrategyConfig): Promise<S3Upload>;
}

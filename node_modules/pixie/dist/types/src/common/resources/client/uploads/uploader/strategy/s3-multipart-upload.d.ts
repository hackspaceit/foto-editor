import { UploadStrategy, UploadStrategyConfig } from './upload-strategy';
import { UploadedFile } from '../../uploaded-file';
export declare class S3MultipartUpload implements UploadStrategy {
    private file;
    private config;
    private abortController;
    private chunks;
    private uploadId?;
    private fileKey?;
    private readonly chunkAxios;
    private abortedByUser;
    private uploadedParts?;
    get storageKey(): string;
    constructor(file: UploadedFile, config: UploadStrategyConfig);
    start(): Promise<void>;
    abort(): Promise<void>;
    private uploadParts;
    private batchSignUrls;
    private uploadPartToS3;
    private createMultipartUpload;
    private getUploadedParts;
    private completeMultipartUpload;
    private createFileEntry;
    private prepareChunks;
    private abortUploadOnS3;
    static create(file: UploadedFile, config: UploadStrategyConfig): Promise<S3MultipartUpload>;
}

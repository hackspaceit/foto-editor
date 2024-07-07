import { Upload } from 'tus-js-client';
import { UploadedFile } from '../../uploaded-file';
import { UploadStrategy, UploadStrategyConfig } from './upload-strategy';
export declare class TusUpload implements UploadStrategy {
    private upload;
    constructor(upload: Upload);
    start(): void;
    abort(): Promise<void>;
    static create(file: UploadedFile, { onProgress, onSuccess, onError, metadata, chunkSize, baseUrl, }: UploadStrategyConfig): Promise<TusUpload>;
}

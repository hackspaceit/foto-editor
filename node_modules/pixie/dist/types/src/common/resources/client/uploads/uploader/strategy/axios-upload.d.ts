import { UploadedFile } from '../../uploaded-file';
import { UploadStrategy, UploadStrategyConfig } from './upload-strategy';
export declare class AxiosUpload implements UploadStrategy {
    private file;
    private config;
    private abortController;
    constructor(file: UploadedFile, config: UploadStrategyConfig);
    start(): Promise<void>;
    abort(): Promise<void>;
    static create(file: UploadedFile, config: UploadStrategyConfig): Promise<AxiosUpload>;
}

export declare class UploadedFile {
    id: string;
    fingerprint: string;
    name: string;
    relativePath: string;
    size: number;
    mime: string;
    extension: string;
    native: File;
    lastModified: number;
    private cachedData?;
    get data(): Promise<string>;
    constructor(file: File, relativePath?: string | null);
}

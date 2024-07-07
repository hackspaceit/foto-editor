import { UploadInputConfig } from '../types/upload-input-config';
export declare function createUploadInput(config?: UploadInputConfig): HTMLInputElement;
export interface UploadAccentProps {
    extensions?: string[];
    types?: string[];
}
export declare function buildUploadInputAccept({ extensions, types, }: UploadAccentProps): string;

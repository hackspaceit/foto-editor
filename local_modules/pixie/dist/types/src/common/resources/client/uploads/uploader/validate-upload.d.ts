import { UploadedFile } from '../uploaded-file';
import { MessageDescriptor } from '../../i18n/message-descriptor';
export interface Restrictions {
    maxFileSize?: number;
    allowedFileTypes?: string[];
    blockedFileTypes?: string[];
}
export declare function validateUpload(file: UploadedFile, restrictions?: Restrictions): MessageDescriptor | void;

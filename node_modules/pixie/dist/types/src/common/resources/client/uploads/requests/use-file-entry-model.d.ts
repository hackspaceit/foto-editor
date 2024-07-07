import { BackendResponse } from '@common/http/backend-response/backend-response';
import { FileEntry } from '@common/uploads/file-entry';
interface Response extends BackendResponse {
    fileEntry: FileEntry;
}
interface Options {
    enabled?: boolean;
}
export declare function useFileEntryModel(entryIdOrUrl: number | string | undefined, options?: Options): import("@tanstack/react-query").UseQueryResult<Response, Error>;
export {};

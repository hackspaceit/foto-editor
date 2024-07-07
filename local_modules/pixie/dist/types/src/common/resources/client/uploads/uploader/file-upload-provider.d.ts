import { StoreApi } from 'zustand';
import { ReactNode } from 'react';
import { FileUploadState } from './file-upload-store';
type ExtractState<S> = S extends {
    getState: () => infer T;
} ? T : never;
type UseFileUploadStore = {
    (): ExtractState<StoreApi<FileUploadState>>;
    <U>(selector: (state: ExtractState<StoreApi<FileUploadState>>) => U, equalityFn?: (a: U, b: U) => boolean): U;
};
export declare const useFileUploadStore: UseFileUploadStore;
interface FileUploadProviderProps {
    children: ReactNode;
}
export declare function FileUploadProvider({ children }: FileUploadProviderProps): import("react/jsx-runtime").JSX.Element;
export {};

import { RefObject } from 'react';
type Callback = (e: {
    width: number;
    height: number;
}) => void;
export declare function observeSize(ref: RefObject<HTMLElement>, callback: Callback): () => void;
export {};

import { Extension } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        indent: {
            indent: () => ReturnType;
            outdent: () => ReturnType;
        };
    }
}
export declare const Indent: Extension<{
    types: string[];
    minLevel: number;
    maxLevel: number;
}, any>;

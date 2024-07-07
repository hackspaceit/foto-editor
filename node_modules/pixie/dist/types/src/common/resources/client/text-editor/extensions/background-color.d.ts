import { Extension } from '@tiptap/core';
import '@tiptap/extension-text-style';
export type ColorOptions = {
    types: string[];
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        bgColor: {
            setBackgroundColor: (color: string) => ReturnType;
            unsetBackgroundColor: () => ReturnType;
        };
    }
}
export declare const BackgroundColor: Extension<ColorOptions, any>;

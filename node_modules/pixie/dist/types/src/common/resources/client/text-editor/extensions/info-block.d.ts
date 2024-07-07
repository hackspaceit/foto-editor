import { Node } from '@tiptap/react';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        important: {
            addInfo: (attributes: {
                type: 'important' | 'warning' | 'success';
            }) => ReturnType;
        };
    }
}
export declare const InfoBlock: Node<any, any>;

import { Node } from '@tiptap/react';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        embed: {
            setEmbed: (options: {
                src: string;
            }) => ReturnType;
        };
    }
}
export declare const Embed: Node<any, any>;

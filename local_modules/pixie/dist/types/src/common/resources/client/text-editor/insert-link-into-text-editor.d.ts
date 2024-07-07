import { Editor } from '@tiptap/react';
interface Props {
    href: string;
    target?: string;
    text?: string;
}
export declare function insertLinkIntoTextEditor(editor: Editor, { text, target, href }: Props): void;
export {};

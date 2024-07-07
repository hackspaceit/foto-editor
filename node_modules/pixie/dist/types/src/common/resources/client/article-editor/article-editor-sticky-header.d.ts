import { ReactNode } from 'react';
import { Editor } from '@tiptap/react';
interface StickyHeaderProps {
    editor: Editor;
    allowSlugEditing?: boolean;
    onSave?: (editorContent: string) => void;
    saveButton?: ReactNode;
    backLink: string;
    isLoading?: boolean;
    slugPrefix?: string;
    imageDiskPrefix?: string;
}
export declare function ArticleEditorStickyHeader({ editor, allowSlugEditing, onSave, saveButton, isLoading, backLink, slugPrefix, imageDiskPrefix, }: StickyHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};

import { MutableRefObject, ReactNode } from 'react';
import type ReactAce from 'react-ace';
interface TextEditorSourcecodeDialogProps {
    defaultValue: string;
    mode?: 'css' | 'html' | 'php_laravel_blade';
    title: ReactNode;
    onSave?: (value?: string) => void;
    isSaving?: boolean;
    footerStartAction?: ReactNode;
    beautify?: boolean;
    editorRef?: MutableRefObject<ReactAce | null>;
}
export declare function AceDialog({ defaultValue, mode, title, onSave, isSaving, footerStartAction, beautify, editorRef, }: TextEditorSourcecodeDialogProps): import("react/jsx-runtime").JSX.Element;
export {};

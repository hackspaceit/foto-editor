import { MutableRefObject } from 'react';
import ReactAce from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-php_laravel_blade';
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/theme-tomorrow_night';
import 'ace-builds/src-noconflict/ext-language_tools';
interface Props {
    mode: 'css' | 'html' | 'javascript' | 'php_laravel_blade';
    onChange: (value: string) => void;
    onIsValidChange: (isValid: boolean) => void;
    defaultValue: string;
    beautify?: boolean;
    editorRef?: MutableRefObject<ReactAce | null>;
}
export default function AceEditor({ mode, onChange, onIsValidChange, defaultValue, beautify, editorRef: propsEditorRef, }: Props): import("react/jsx-runtime").JSX.Element;
export {};

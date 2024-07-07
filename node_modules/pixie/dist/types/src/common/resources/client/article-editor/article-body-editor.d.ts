import { Editor, FocusPosition } from '@tiptap/react';
import { ReactElement } from 'react';
interface Props {
    initialContent?: string;
    onLoad?: (editor: Editor) => void;
    children: (content: ReactElement, editor: Editor) => ReactElement;
    minHeight?: string;
    onCtrlEnter?: () => void;
    autoFocus?: FocusPosition;
}
export default function ArticleBodyEditor({ initialContent, children, onLoad: _onLoad, onCtrlEnter, minHeight, autoFocus, }: Props): ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};

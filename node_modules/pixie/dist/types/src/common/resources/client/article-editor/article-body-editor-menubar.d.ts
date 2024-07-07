import { MenubarButtonProps } from '@common/text-editor/menubar/menubar-button-props';
interface Props extends MenubarButtonProps {
    justify?: string;
    hideInsertButton?: boolean;
    imageDiskPrefix?: string;
}
export declare function ArticleBodyEditorMenubar({ editor, size, justify, hideInsertButton, imageDiskPrefix, }: Props): import("react/jsx-runtime").JSX.Element;
export {};

import { ReactNode } from 'react';
import { FilePreviewProps } from './file-preview-props';
interface Props extends FilePreviewProps {
    message?: ReactNode;
}
export declare function DefaultFilePreview({ message, className, allowDownload }: Props): import("react/jsx-runtime").JSX.Element;
export {};

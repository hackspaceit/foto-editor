import { RefCallBack } from 'react-hook-form';
export interface SlugEditorProps {
    prefix?: string;
    suffix?: string;
    host?: string;
    value?: string | null;
    placeholder?: string;
    onChange?: (value: string) => void;
    className?: string;
    inputRef?: RefCallBack;
    onInputBlur?: () => void;
    showLinkIcon?: boolean;
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    hideButton?: boolean;
}
export declare function SlugEditor({ host, value: initialValue, placeholder, onChange, className, inputRef, onInputBlur, showLinkIcon, pattern, minLength, maxLength, hideButton, ...props }: SlugEditorProps): import("react/jsx-runtime").JSX.Element;

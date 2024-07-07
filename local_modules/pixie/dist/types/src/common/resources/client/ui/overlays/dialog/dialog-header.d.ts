import { ReactNode } from 'react';
import { DialogSize } from './dialog';
import { ButtonSize } from '@common/ui/buttons/button-size';
interface DialogHeaderProps {
    children: ReactNode;
    className?: string;
    color?: string | null;
    onDismiss?: () => void;
    hideDismissButton?: boolean;
    leftAdornment?: ReactNode;
    rightAdornment?: ReactNode;
    actions?: ReactNode;
    size?: DialogSize;
    padding?: string;
    justify?: string;
    showDivider?: boolean;
    titleTextSize?: string;
    titleFontWeight?: string;
    closeButtonSize?: ButtonSize;
}
export declare function DialogHeader(props: DialogHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};

import { BgSelectorTabProps } from '@common/background-selector/bg-selector-tab-props';
import { BackgroundSelectorConfig } from '@common/background-selector/background-selector-config';
export declare function ImageBackgroundTab({ value, onChange, className, positionSelector, diskPrefix, isInsideDialog, }: BgSelectorTabProps<BackgroundSelectorConfig>): import("react/jsx-runtime").JSX.Element;
interface CustomImageDialogProps {
    value?: BackgroundSelectorConfig;
    diskPrefix?: string;
    hideFooter?: boolean;
}
export declare function CustomImageDialog({ value, diskPrefix, hideFooter, }: CustomImageDialogProps): import("react/jsx-runtime").JSX.Element;
export {};

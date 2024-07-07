import { BackgroundSelectorConfig } from '@common/background-selector/background-selector-config';
interface BackgroundSelectorProps {
    className?: string;
    value: BackgroundSelectorConfig | undefined;
    onChange: (newValue: BackgroundSelectorConfig) => void;
    tabColWidth?: string;
    isInsideDialog?: boolean;
    positionSelector?: 'simple' | 'advanced';
    diskPrefix?: string;
}
export declare function BackgroundSelector({ className, value, onChange, tabColWidth, isInsideDialog, positionSelector, diskPrefix, }: BackgroundSelectorProps): import("react/jsx-runtime").JSX.Element;
export {};

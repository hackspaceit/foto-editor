import { ListItemBaseProps } from '../../list/list-item-base';
export interface ListboxItemProps extends ListItemBaseProps {
    value: any;
    textLabel?: string;
    onSelected?: () => void;
    onKeyDown?: any;
    tabIndex?: number;
    className?: string;
    capitalizeFirst?: boolean;
}
export declare function Item({ children, value, startIcon, endIcon, endSection, description, capitalizeFirst, textLabel, isDisabled, onSelected, onClick, ...domProps }: ListboxItemProps): import("react/jsx-runtime").JSX.Element | null;

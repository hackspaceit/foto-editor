import { ComboboxProps } from './combobox';
type Props<T extends object> = ComboboxProps<T> & {
    name: string;
    selectionMode?: 'single';
};
export declare function FormComboBox<T extends object>({ children, ...props }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};

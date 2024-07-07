import { ChipFieldProps } from './chip-field';
export type FormChipFieldProps<T> = ChipFieldProps<T> & {
    name: string;
};
export declare function FormChipField<T>({ children, ...props }: FormChipFieldProps<T>): import("react/jsx-runtime").JSX.Element;

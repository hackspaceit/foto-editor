import { ReactElement, Ref } from 'react';
import { BaseFieldPropsWithDom } from '../input-field/base-field-props';
import { Item } from '../listbox/item';
import { Section } from '../listbox/section';
import { ListBoxChildren, ListboxProps } from '../listbox/types';
export type SelectProps<T extends object> = Omit<BaseFieldPropsWithDom<HTMLButtonElement>, 'value'> & ListboxProps & ListBoxChildren<T> & {
    hideCaret?: boolean;
    selectionMode: 'single';
    minWidth?: string;
    searchPlaceholder?: string;
    showSearchField?: boolean;
    valueClassName?: string;
};
declare const SelectForwardRef: <T extends object>(props: SelectProps<T> & {
    ref?: Ref<HTMLButtonElement>;
}) => ReactElement;
export { SelectForwardRef as Select };
export type FormSelectProps<T extends object> = SelectProps<T> & {
    name: string;
};
export declare function FormSelect<T extends object>({ children, ...props }: FormSelectProps<T>): import("react/jsx-runtime").JSX.Element;
export { Item as Option };
export { Section as OptionGroup };

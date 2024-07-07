import { ReactElement, Ref } from 'react';
import { BaseFieldPropsWithDom } from '../input-field/base-field-props';
import { Item } from '../listbox/item';
import { SvgIconProps } from '@common/icons/svg-icon';
import { ListBoxChildren, ListboxProps } from '../listbox/types';
export { Item as Option };
export type ComboboxProps<T extends object> = Omit<BaseFieldPropsWithDom<HTMLInputElement>, 'endAdornment'> & ListBoxChildren<T> & ListboxProps & {
    selectionMode?: 'single' | 'none';
    isAsync?: boolean;
    isLoading?: boolean;
    openMenuOnFocus?: boolean;
    endAdornmentIcon?: ReactElement<SvgIconProps>;
    useOptionLabelAsInputValue?: boolean;
    hideEndAdornment?: boolean;
    onEndAdornmentClick?: () => void;
    prependListbox?: boolean;
    listboxClassName?: string;
};
declare const ComboBoxForwardRef: <T extends object>(props: ComboboxProps<T> & {
    ref?: Ref<HTMLInputElement>;
}) => ReactElement;
export { ComboBoxForwardRef as ComboBox };

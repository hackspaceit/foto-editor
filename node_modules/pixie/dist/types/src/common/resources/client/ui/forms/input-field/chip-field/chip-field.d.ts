import { ReactElement, ReactNode, Ref } from 'react';
import { ChipProps } from './chip';
import { NormalizedModel } from '@common/datatable/filters/normalized-model';
import { BaseFieldPropsWithDom } from '../base-field-props';
import { ListBoxChildren, ListboxProps } from '../../listbox/types';
export interface ChipValue extends Omit<NormalizedModel, 'model_type'> {
    invalid?: boolean;
    errorMessage?: string;
}
export type ChipFieldProps<T> = Omit<ListboxProps, 'selectionMode' | 'displayWith'> & Omit<BaseFieldPropsWithDom<HTMLInputElement>, 'value' | 'onChange' | 'defaultValue'> & {
    value?: (ChipValue | string)[];
    defaultValue?: (ChipValue | string)[];
    displayWith?: (value: ChipValue) => ReactNode;
    validateWith?: (value: ChipValue) => ChipValue;
    allowCustomValue?: boolean;
    showDropdownArrow?: boolean;
    onChange?: (value: ChipValue[]) => void;
    suggestions?: T[];
    children?: ListBoxChildren<T>['children'];
    placeholder?: string;
    chipSize?: ChipProps['size'];
    openMenuOnFocus?: boolean;
    valueKey?: 'id' | 'name';
    onChipClick?: (value: ChipValue) => void;
};
export declare const ChipField: <T>(props: ChipFieldProps<T> & {
    ref?: Ref<HTMLInputElement>;
}) => ReactElement;

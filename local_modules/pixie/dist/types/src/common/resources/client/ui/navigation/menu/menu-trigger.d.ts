import React, { ReactElement } from 'react';
import { Item } from '@common/ui/forms/listbox/item';
import { Section } from '@common/ui/forms/listbox/section';
import { ListBoxChildren, ListboxProps } from '@common/ui/forms/listbox/types';
type Props = ListboxProps & {
    searchPlaceholder?: string;
    showSearchField?: boolean;
    children: [ReactElement, ReactElement<ListBoxChildren<string | number>>];
};
export declare const MenuTrigger: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export declare function Menu({ children }: ListBoxChildren<string | number>): ReactElement;
export { Item as MenuItem };
export { Section as MenuSection };

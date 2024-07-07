import { ReactElement } from 'react';
import { ListboxItemProps } from '@common/ui/forms/listbox/item';
interface Props {
    children: ReactElement;
    items?: ReactElement<ListboxItemProps>[];
}
export declare function NavbarAuthMenu({ children, items }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};

import React, { ReactElement } from 'react';
import { MenuConfig, MenuItemConfig } from '../core/settings/settings';
import { Orientation } from '../ui/forms/orientation';
import { IconSize } from '@common/icons/svg-icon';
type MatchDescendants = undefined | boolean | ((to: string) => boolean);
interface CustomMenuProps {
    className?: string;
    matchDescendants?: MatchDescendants;
    iconClassName?: string;
    iconSize?: IconSize;
    itemClassName?: string | ((props: {
        isActive: boolean;
        item: MenuItemConfig;
    }) => string | undefined);
    gap?: string;
    menu?: string | MenuConfig;
    children?: (menuItem: MenuItemConfig) => ReactElement;
    orientation?: Orientation;
    onlyShowIcons?: boolean;
    unstyled?: boolean;
}
export declare function CustomMenu({ className, iconClassName, itemClassName, gap, menu: menuOrPosition, orientation, children, matchDescendants, onlyShowIcons, iconSize, unstyled, }: CustomMenuProps): import("react/jsx-runtime").JSX.Element | null;
interface MenuItemProps extends React.RefAttributes<HTMLAnchorElement> {
    item: MenuItemConfig;
    iconClassName?: string;
    className?: (props: {
        isActive: boolean;
    }) => string | undefined;
    matchDescendants?: MatchDescendants;
    onlyShowIcon?: boolean;
    iconSize?: IconSize;
    unstyled?: boolean;
}
export declare const CustomMenuItem: React.ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export {};

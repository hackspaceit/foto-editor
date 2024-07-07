import { BackendResponse } from './backend-response/backend-response';
import { Localization } from '../i18n/localization';
import { CssTheme } from '../ui/themes/css-theme';
import { Role } from '../auth/role';
import { Permission } from '../auth/permission';
import { MenuItemCategory } from '../admin/appearance/sections/menus/menu-item-category';
import { CustomPage } from '../admin/custom-pages/custom-page';
import { CustomDomain } from '../custom-domains/custom-domain';
import { MessageDescriptor } from '@common/i18n/message-descriptor';
export interface FetchValueListsResponse extends BackendResponse {
    countries?: CountryListItem[];
    timezones?: {
        [key: string]: Timezone[];
    };
    languages?: LanguageListItem[];
    localizations?: Localization[];
    currencies?: {
        [key: string]: Currency;
    };
    domains?: CustomDomain[];
    pages?: CustomPage[];
    themes?: CssTheme[];
    permissions?: Permission[];
    workspacePermissions?: Permission[];
    roles?: Role[];
    menuItemCategories?: MenuItemCategory[];
    googleFonts?: FontConfig[];
    workspaceRoles?: Role[];
}
export interface CountryListItem {
    name: string;
    code: string;
}
export interface LanguageListItem {
    name: string;
    nativeName?: string;
    code: string;
}
export interface Currency {
    name: string;
    decimal_digits: number;
    symbol: string;
    code: string;
}
export interface Timezone {
    text: string;
    value: string;
}
export interface FontConfig {
    label?: MessageDescriptor;
    family: string;
    category?: string;
    google?: boolean;
}
interface Options {
    disabled?: boolean;
}
export declare function useValueLists(names: (keyof FetchValueListsResponse)[], params?: Record<string, any>, options?: Options): import("@tanstack/react-query").UseQueryResult<FetchValueListsResponse, Error>;
export declare function prefetchValueLists(names: (keyof FetchValueListsResponse)[], params?: Record<string, string | number | undefined>): void;
export {};

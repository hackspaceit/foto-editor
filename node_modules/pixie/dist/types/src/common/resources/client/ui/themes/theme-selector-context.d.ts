import { CssTheme } from './css-theme';
export type ThemeId = 'light' | 'dark' | number;
export interface ThemeSelectorContextValue {
    allThemes: CssTheme[];
    selectedTheme: CssTheme;
    selectTheme: (themeId: ThemeId) => void;
}
export declare const ThemeSelectorContext: React.Context<ThemeSelectorContextValue>;
export declare function useThemeSelector(): ThemeSelectorContextValue;

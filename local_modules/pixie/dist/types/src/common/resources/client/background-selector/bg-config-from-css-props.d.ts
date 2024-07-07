import { CSSProperties } from 'react';
import { BackgroundSelectorConfig } from '@common/background-selector/background-selector-config';
export declare function bgConfigFromCssProps(cssProps: CSSProperties | CSSStyleDeclaration): BackgroundSelectorConfig | undefined;
export declare function urlFromBackgroundImage(backgroundImage: string | undefined): string | undefined;

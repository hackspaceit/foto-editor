import React, { ComponentType, ReactElement } from 'react';
import { SvgIconProps } from './svg-icon';
export declare function createSvgIcon(path: ReactElement | ReactElement[], displayName?: string, viewBox?: string): ComponentType<SvgIconProps>;
export interface IconTree {
    tag: string;
    attr?: {
        [key: string]: string;
    };
    child?: {
        tag: string;
        attr?: {
            [key: string]: string;
        };
    }[];
}
export declare function createSvgIconFromTree(data: IconTree[], displayName?: string): React.ComponentType<SvgIconProps>;
export declare function elementToTree(el: HTMLElement | SVGElement): IconTree;

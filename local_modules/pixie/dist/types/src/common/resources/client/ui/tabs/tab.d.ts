import { JSXElementConstructor, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
export interface TabProps {
    className?: string;
    index?: number;
    children: ReactNode;
    isDisabled?: boolean;
    padding?: string;
    elementType?: 'button' | 'a' | JSXElementConstructor<any>;
    to?: LinkProps['to'];
    relative?: LinkProps['relative'];
    replace?: LinkProps['replace'];
    width?: string;
}
export declare function Tab({ index, className, isDisabled, children, padding: paddingProp, elementType, to, relative, width, }: TabProps): import("react/jsx-runtime").JSX.Element;

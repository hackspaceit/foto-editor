import { ReactElement } from 'react';
import { TabListProps } from './tab-list';
import { TabPanelsProps } from './tab-panels';
export interface TabsProps {
    children: [ReactElement<TabListProps>, ReactElement<TabPanelsProps>];
    size?: 'sm' | 'md';
    className?: string;
    selectedTab?: number;
    defaultSelectedTab?: number;
    onTabChange?: (newTab: number) => void;
    isLazy?: boolean;
    overflow?: string;
}
export declare function Tabs(props: TabsProps): import("react/jsx-runtime").JSX.Element;

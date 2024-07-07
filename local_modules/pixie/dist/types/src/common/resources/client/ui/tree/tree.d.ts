import { Key } from 'react';
import { TreeItemRenderer } from './tree-item';
export interface TreeNode {
    id: number | string;
    children: TreeNode[];
}
interface TreeProps<T extends TreeNode> {
    children: TreeItemRenderer<T>;
    nodes: T[];
    selectedKeys?: Key[];
    expandedKeys?: Key[];
    defaultExpandedKeys?: Key[];
    onExpandedKeysChange?: (value: Key[]) => void;
    defaultSelectedKeys?: Key[];
    onSelectedKeysChange?: (value: Key[]) => void;
}
export declare function Tree<T extends TreeNode>({ children, nodes, ...props }: TreeProps<T>): import("react/jsx-runtime").JSX.Element;
export {};

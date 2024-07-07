import { HTMLAttributes, ReactElement, ReactNode, Ref } from 'react';
import { TreeNode } from './tree';
export type TreeItemRenderer<T extends TreeNode> = (node: any) => ReactElement<TreeItemProps<T>>;
export interface TreeItemProps<T extends TreeNode> extends HTMLAttributes<HTMLElement> {
    label: ReactNode;
    icon: ReactNode;
    node?: T;
    parentNode?: T;
    level?: number;
    index?: number;
    itemRenderer?: TreeItemRenderer<T>;
    labelRef?: Ref<HTMLDivElement>;
    labelClassName?: string;
    className?: string;
}
export declare function TreeItem<T extends TreeNode>({ label, icon, node, level, index, itemRenderer, labelRef, labelClassName, className, parentNode, ...domProps }: TreeItemProps<T>): import("react/jsx-runtime").JSX.Element | null;

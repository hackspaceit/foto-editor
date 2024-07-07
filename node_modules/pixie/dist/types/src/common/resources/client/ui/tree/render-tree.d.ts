import { TreeItemRenderer } from './tree-item';
import { TreeNode } from './tree';
interface RenderTreeProps<T extends TreeNode> {
    nodes: T[];
    parentNode?: T;
    itemRenderer: TreeItemRenderer<T>;
    level?: number;
}
export declare function renderTree<T extends TreeNode>({ nodes, itemRenderer, parentNode, level, }: RenderTreeProps<T>): React.ReactElement<import("./tree-item").TreeItemProps<T>, string | React.JSXElementConstructor<any>>[];
export {};

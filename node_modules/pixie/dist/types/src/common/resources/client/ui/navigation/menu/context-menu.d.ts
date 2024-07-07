import { ListBoxChildren, ListboxProps } from '../../forms/listbox/types';
import { VirtualElement } from '@floating-ui/react-dom';
type Props = ListboxProps & ListBoxChildren<any> & {
    position?: {
        x: number;
        y: number;
    } | null;
};
export declare function ContextMenu({ position, children, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export declare function pointToVirtualElement({ x, y }: {
    x: number;
    y: number;
}, contextElement?: Element): VirtualElement;
export {};

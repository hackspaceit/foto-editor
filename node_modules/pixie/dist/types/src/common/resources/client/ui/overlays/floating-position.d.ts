import { OffsetOptions, Placement, ReferenceType } from '@floating-ui/react-dom';
import { CSSProperties, Ref } from 'react';
interface Props {
    floatingWidth?: 'auto' | 'matchTrigger';
    ref?: Ref<HTMLElement>;
    disablePositioning?: boolean;
    placement?: Placement;
    offset?: OffsetOptions;
    showArrow?: boolean;
    maxHeight?: number;
    shiftCrossAxis?: boolean;
    fallbackPlacements?: Placement[];
}
export declare function useFloatingPosition({ floatingWidth, ref, disablePositioning, placement, offset, showArrow, maxHeight, shiftCrossAxis, fallbackPlacements, }: Props): {
    reference: (instance: ReferenceType | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES];
    arrowRef: React.RefObject<HTMLElement>;
    arrowStyle: CSSProperties;
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: CSSProperties;
    refs: {
        reference: React.MutableRefObject<ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    };
    elements: {
        reference: ReferenceType | null;
        floating: HTMLElement | null;
    };
};
export {};

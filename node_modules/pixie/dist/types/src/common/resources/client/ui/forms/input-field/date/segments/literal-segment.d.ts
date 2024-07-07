import { ComponentPropsWithoutRef } from 'react';
export interface LiteralSegment {
    type: 'literal';
    minLength: 1;
    text: string;
}
interface LiteralSegmentProps extends ComponentPropsWithoutRef<'div'> {
    segment: LiteralSegment;
    domProps?: ComponentPropsWithoutRef<'div'>;
}
export declare function LiteralDateSegment({ segment, domProps }: LiteralSegmentProps): import("react/jsx-runtime").JSX.Element;
export {};

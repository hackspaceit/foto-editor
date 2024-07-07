import { IgnitionErrorPayload, IgnitionFrame } from '@common/utils/http/ignition-error-dialog/ignition-error-payload';
interface StackTraceProps {
    trace: IgnitionErrorPayload['trace'];
    onSelectedIndexChange: (index: number) => void;
    selectedIndex: number;
    totalVendorGroups: number;
}
export declare function IgnitionStackTrace({ trace, onSelectedIndexChange, selectedIndex, totalVendorGroups, }: StackTraceProps): import("react/jsx-runtime").JSX.Element;
interface IgnitionFilePath {
    frame: IgnitionFrame;
}
export declare function IgnitionFilePath({ frame }: IgnitionFilePath): import("react/jsx-runtime").JSX.Element;
export {};

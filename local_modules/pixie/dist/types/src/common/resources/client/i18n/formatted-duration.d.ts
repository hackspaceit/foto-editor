interface FormattedTrackDurationProps {
    ms?: number;
    minutes?: number;
    seconds?: number;
    verbose?: boolean;
    addZeroToFirstUnit?: boolean;
}
export declare const FormattedDuration: React.MemoExoticComponent<({ minutes, seconds, ms, verbose, addZeroToFirstUnit, }: FormattedTrackDurationProps) => import("react/jsx-runtime").JSX.Element>;
export {};

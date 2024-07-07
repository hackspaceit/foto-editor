import { DateRangePickerState } from '../use-date-range-picker-state';
interface DateRangeDialogProps {
    state: DateRangePickerState;
    compareState?: DateRangePickerState;
    compareVisibleDefault?: boolean;
    showInlineDatePickerField?: boolean;
}
export declare function DateRangeDialog({ state, compareState, showInlineDatePickerField, compareVisibleDefault, }: DateRangeDialogProps): import("react/jsx-runtime").JSX.Element;
export {};

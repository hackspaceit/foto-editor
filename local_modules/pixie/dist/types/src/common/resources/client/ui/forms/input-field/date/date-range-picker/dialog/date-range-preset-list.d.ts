import { DateRangeValue } from '@common/ui/forms/input-field/date/date-range-picker/date-range-value';
interface DateRangePresetList {
    onPresetSelected: (value: DateRangeValue) => void;
    selectedValue?: DateRangeValue | null;
}
export declare function DatePresetList({ onPresetSelected, selectedValue, }: DateRangePresetList): import("react/jsx-runtime").JSX.Element;
export {};

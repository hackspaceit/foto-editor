import { DateRangeValue } from '@common/ui/forms/input-field/date/date-range-picker/date-range-value';
interface DateRangePresetList {
    originalRangeValue: DateRangeValue;
    onPresetSelected: (value: DateRangeValue) => void;
    selectedValue?: DateRangeValue | null;
}
export declare function DateRangeComparePresetList({ originalRangeValue, onPresetSelected, selectedValue, }: DateRangePresetList): import("react/jsx-runtime").JSX.Element;
export {};

import { DateRangeValue } from '@common/ui/forms/input-field/date/date-range-picker/date-range-value';
import { MessageDescriptor } from '@common/i18n/message-descriptor';
export interface DateRangeComparePreset {
    key: number;
    label: MessageDescriptor;
    getRangeValue: (range: DateRangeValue) => DateRangeValue;
}
export declare const DateRangeComparePresets: DateRangeComparePreset[];

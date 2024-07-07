import { DateRangeValue } from '../date-range-value';
import { MessageDescriptor } from '@common/i18n/message-descriptor';
export interface DateRangePreset {
    key: number;
    label: MessageDescriptor;
    getRangeValue: () => DateRangeValue;
}
export declare const DateRangePresets: DateRangePreset[];

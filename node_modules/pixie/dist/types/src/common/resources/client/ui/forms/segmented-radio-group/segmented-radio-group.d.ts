import { RadioGroupProps } from '../radio-group/radio-group';
export interface SegmentedRadioGroupProps extends Omit<RadioGroupProps, 'orientation'> {
    value?: string;
    onChange?: (value: string) => void;
    defaultValue?: string;
    width?: string;
}
export declare const SegmentedRadioGroup: React.ForwardRefExoticComponent<SegmentedRadioGroupProps & React.RefAttributes<HTMLFieldSetElement>>;

import React, { Ref } from 'react';
import { RadioProps } from '../radio-group/radio';
export interface SegmentedRadioProps extends RadioProps {
    labelRef?: Ref<HTMLLabelElement>;
    isSelected?: boolean;
}
export declare const SegmentedRadio: React.ForwardRefExoticComponent<SegmentedRadioProps & React.RefAttributes<HTMLInputElement>>;

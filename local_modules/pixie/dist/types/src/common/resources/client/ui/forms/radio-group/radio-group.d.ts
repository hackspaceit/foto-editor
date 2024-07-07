import { ReactNode } from 'react';
import { Orientation } from '../orientation';
export interface RadioGroupProps {
    children: ReactNode;
    orientation?: Orientation;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
    label?: ReactNode;
    disabled?: boolean;
    name?: string;
    errorMessage?: ReactNode;
    description?: ReactNode;
    invalid?: boolean;
    required?: boolean;
}
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
interface FormRadioGroupProps extends RadioGroupProps {
    name: string;
}
export declare function FormRadioGroup({ children, ...props }: FormRadioGroupProps): import("react/jsx-runtime").JSX.Element;
export {};

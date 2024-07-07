import { ReactElement, ReactNode } from "react";
import { Orientation } from "../orientation";
import { CheckboxProps } from "./checkbox";
interface CheckboxGroupProps {
    children: ReactElement<CheckboxProps> | ReactElement<CheckboxProps>[];
    orientation?: Orientation;
    className?: string;
    value?: (string | number)[];
    defaultValue?: (string | number)[];
    onChange?: (newValue: (string | number)[]) => void;
    label?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    invalid?: boolean;
}
export declare function CheckboxGroup(props: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export {};

import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { FocusEventHandler, ReactNode } from 'react';
interface Props<T extends FieldValues> {
    children: ReactNode;
    form: UseFormReturn<T>;
    className?: string;
    onSubmit: SubmitHandler<T>;
    onBeforeSubmit?: () => void;
    onBlur?: FocusEventHandler<HTMLFormElement>;
    id?: string;
}
export declare function Form<T extends FieldValues>({ children, onBeforeSubmit, onSubmit, form, className, id, onBlur, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};

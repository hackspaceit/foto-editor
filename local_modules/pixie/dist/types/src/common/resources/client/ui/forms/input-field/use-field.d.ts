import { HTMLAttributes, RefObject } from 'react';
import { BaseFieldPropsWithDom } from './base-field-props';
import type { FieldProps } from './field';
interface UseFieldReturn<T> {
    fieldProps: Omit<FieldProps, 'fieldClassNames' | 'children'>;
    inputProps: HTMLAttributes<T>;
}
interface Props<T> extends BaseFieldPropsWithDom<T> {
    focusRef: RefObject<HTMLElement>;
}
export declare function useField<T>(props: Props<T>): UseFieldReturn<T>;
export {};

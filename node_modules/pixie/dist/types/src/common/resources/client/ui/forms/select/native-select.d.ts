import React from 'react';
import { BaseFieldProps } from '../input-field/base-field-props';
interface Props extends BaseFieldProps, Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
}
export declare function NativeSelect(props: Props): import("react/jsx-runtime").JSX.Element;
export {};

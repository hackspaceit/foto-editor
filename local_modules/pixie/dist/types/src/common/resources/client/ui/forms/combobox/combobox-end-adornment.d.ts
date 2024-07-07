import { ReactElement } from 'react';
import { SvgIconProps } from '@common/icons/svg-icon';
interface Props {
    isLoading?: boolean;
    icon?: ReactElement<SvgIconProps>;
}
export declare function ComboboxEndAdornment({ isLoading, icon }: Props): import("react/jsx-runtime").JSX.Element;
export {};

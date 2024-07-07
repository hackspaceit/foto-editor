import { ReactElement } from 'react';
import { OffsetOptions, Placement } from '@floating-ui/react-dom';
import { MessageDescriptor } from '@common/i18n/message-descriptor';
interface Props {
    label: ReactElement<MessageDescriptor> | string;
    placement?: Placement;
    children: ReactElement;
    variant?: 'neutral' | 'positive' | 'danger';
    delay?: number;
    isDisabled?: boolean;
    offset?: OffsetOptions;
    usePortal?: boolean;
}
export declare const Tooltip: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
export {};

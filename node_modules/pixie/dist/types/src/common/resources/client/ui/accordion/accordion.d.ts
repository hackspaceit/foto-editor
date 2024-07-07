import React, { ReactElement, ReactNode } from 'react';
type Props = {
    variant?: 'outline' | 'default' | 'minimal';
    children?: ReactNode;
    mode?: 'single' | 'multiple';
    expandedValues?: (string | number)[];
    defaultExpandedValues?: (string | number)[];
    onExpandedChange?: (key: (string | number)[]) => void;
    className?: string;
    isLazy?: boolean;
};
export declare const Accordion: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
interface AccordionItemProps {
    children: ReactNode;
    disabled?: boolean;
    label: ReactNode;
    description?: ReactNode;
    value?: string | number;
    isFirst?: boolean;
    isLast?: boolean;
    bodyClassName?: string;
    labelClassName?: string;
    buttonPadding?: string;
    chevronPosition?: 'left' | 'right';
    startIcon?: ReactElement;
    endAppend?: ReactElement;
    variant?: 'outline' | 'default' | 'minimal';
    expandedValues?: (string | number)[];
    setExpandedValues?: (keys: (string | number)[]) => void;
    mode?: 'single' | 'multiple';
    footerContent?: ReactNode;
    isLazy?: boolean;
    onHeaderMouseEnter?: () => void;
    onHeaderMouseLeave?: () => void;
}
export declare function AccordionItem(props: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
export {};

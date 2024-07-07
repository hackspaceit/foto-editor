import { ComponentProps, ReactNode } from 'react';
interface BackgroundSelectorButtonProps extends ComponentProps<'button'> {
    isActive?: boolean;
    children?: ReactNode;
    label: ReactNode;
}
export declare const BackgroundSelectorButton: React.ForwardRefExoticComponent<Omit<BackgroundSelectorButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};

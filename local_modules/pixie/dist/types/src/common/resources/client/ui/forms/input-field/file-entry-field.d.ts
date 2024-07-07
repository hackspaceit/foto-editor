import { ReactNode } from 'react';
import { Disk } from '@common/uploads/types/backend-metadata';
interface Props {
    className?: string;
    label?: ReactNode;
    description?: ReactNode;
    invalid?: boolean;
    errorMessage?: ReactNode;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (newValue: string) => void;
    allowedFileTypes?: string[];
    maxFileSize?: number;
    diskPrefix: string;
    disk?: Disk;
    showRemoveButton?: boolean;
    autoFocus?: boolean;
}
export declare function FileEntryField({ className, label, description, value, onChange, diskPrefix, disk, showRemoveButton, invalid, errorMessage, required, autoFocus, disabled, allowedFileTypes, maxFileSize, }: Props): import("react/jsx-runtime").JSX.Element;
interface FormFileEntryFieldProps extends Props {
    name: string;
}
export declare function FormFileEntryField(props: FormFileEntryFieldProps): import("react/jsx-runtime").JSX.Element;
export {};

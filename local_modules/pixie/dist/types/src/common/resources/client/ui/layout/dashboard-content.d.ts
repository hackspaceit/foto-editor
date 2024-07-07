import { ReactElement } from 'react';
interface DashboardContentProps {
    children: ReactElement<{
        className: string;
    }>;
    isScrollable?: boolean;
}
export declare function DashboardContent({ children, isScrollable, }: DashboardContentProps): ReactElement<{
    className: string;
}, string | React.JSXElementConstructor<any>>;
export {};

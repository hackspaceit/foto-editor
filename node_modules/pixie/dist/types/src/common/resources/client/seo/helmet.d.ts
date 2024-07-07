import { ReactElement } from 'react';
import { MetaTag } from './meta-tag';
export declare const helmetAttribute = "data-be-helmet";
interface HelmetProps {
    children?: ReactElement | ReactElement[];
    tags?: MetaTag[];
}
export declare const Helmet: React.MemoExoticComponent<({ children, tags }: HelmetProps) => null>;
export {};

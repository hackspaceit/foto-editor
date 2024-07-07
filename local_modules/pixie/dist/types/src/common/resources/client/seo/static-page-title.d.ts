import { ReactElement } from 'react';
import { MessageDescriptor } from '../i18n/message-descriptor';
type TitleChild = string | null | ReactElement<MessageDescriptor> | MessageDescriptor;
export type TitleMetaTagChildren = TitleChild | TitleChild[];
interface StaticPageTitleProps {
    children: TitleMetaTagChildren;
}
export declare function StaticPageTitle({ children }: StaticPageTitleProps): import("react/jsx-runtime").JSX.Element;
export {};

import { ComponentPropsWithRef } from 'react';
export declare const LinkStyle = "text-link hover:underline hover:text-primary-dark focus-visible:ring focus-visible:ring-2 focus-visible:ring-offset-2 outline-none rounded transition-colors";
interface ExternalLinkProps extends ComponentPropsWithRef<'a'> {
}
export declare function ExternalLink({ children, className, target, ...domProps }: ExternalLinkProps): import("react/jsx-runtime").JSX.Element;
export {};

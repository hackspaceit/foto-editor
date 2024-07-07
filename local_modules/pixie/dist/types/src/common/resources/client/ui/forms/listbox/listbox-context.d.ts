import { UseListboxReturn } from './types';
type ListBoxReturnType = UseListboxReturn;
export type ListboxContextValue = ListBoxReturnType;
export declare const ListBoxContext: React.Context<UseListboxReturn>;
export declare function useListboxContext(): UseListboxReturn;
export {};

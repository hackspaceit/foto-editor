import { BootstrapData } from './bootstrap-data';
export interface BoostrapDataContextValue<T = BootstrapData> {
    data: T;
    setBootstrapData: (data: string | T) => void;
    mergeBootstrapData: (data: Partial<T>) => void;
    invalidateBootstrapData: () => void;
}
export declare const BoostrapDataContext: React.Context<BoostrapDataContextValue<BootstrapData>>;
export declare function useBootstrapData(): BoostrapDataContextValue<BootstrapData>;

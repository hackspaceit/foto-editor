import { BootstrapData } from './bootstrap-data';
export declare function getBootstrapData(): BootstrapData;
export declare function invalidateBootstrapData(): void;
export declare function setBootstrapData(data: string | BootstrapData): void;
export declare function mergeBootstrapData(partialData: Partial<BootstrapData>): void;
export declare function useBackendBootstrapData(): import("@tanstack/react-query").DefinedUseQueryResult<BootstrapData, Error>;

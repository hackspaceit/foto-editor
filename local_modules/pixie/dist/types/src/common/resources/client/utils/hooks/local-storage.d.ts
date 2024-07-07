export declare function useLocalStorage<T>(key: string, initialValue?: T | null): readonly [T, (value: T | ((val: T) => T)) => void];
export declare function getFromLocalStorage<T>(key: string, initialValue?: T | null): any;
export declare function setInLocalStorage<T>(key: string, value: T): void;
export declare function removeFromLocalStorage(key: string): void;

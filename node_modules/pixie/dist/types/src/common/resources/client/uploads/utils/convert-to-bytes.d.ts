export type SpaceUnit = 'KB' | 'MB' | 'GB' | 'TB' | 'PB';
export declare function convertToBytes(value: number, unit: SpaceUnit): number;

import React from 'react';
import { Workspace } from './types/workspace';
export interface ActiveWorkspaceIdContextValue {
    workspaceId: number | null;
    setWorkspaceId: (id: number) => void;
}
export declare const ActiveWorkspaceIdContext: React.Context<ActiveWorkspaceIdContextValue>;
export declare function useActiveWorkspaceId(): ActiveWorkspaceIdContextValue;
export declare function useActiveWorkspace(): Workspace | null | undefined;
interface ActiveWorkspaceProviderProps {
    children: any;
}
export declare function ActiveWorkspaceProvider({ children, }: ActiveWorkspaceProviderProps): import("react/jsx-runtime").JSX.Element;
export {};

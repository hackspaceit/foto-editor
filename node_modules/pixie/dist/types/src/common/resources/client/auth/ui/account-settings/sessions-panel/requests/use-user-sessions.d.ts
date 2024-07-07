import { BackendResponse } from '@common/http/backend-response/backend-response';
export interface ActiveSession {
    id: string;
    platform?: string;
    device_type?: 'mobile' | 'tablet' | 'desktop';
    browser?: string;
    country?: string;
    city?: string;
    ip_address?: string;
    token?: string;
    is_current_device: boolean;
    last_active: string;
    created_at: string;
}
interface Response extends BackendResponse {
    sessions: ActiveSession[];
}
export declare function useUserSessions(): import("@tanstack/react-query").UseQueryResult<Response, Error>;
export {};

import { User } from './user';
import { Permission } from '@common/auth/permission';
interface UseAuthReturn {
    user: User | null;
    hasPermission: (permission: string) => boolean;
    getPermission: (permission: string) => Permission | undefined;
    getRestrictionValue: (permission: string, restriction: string) => string | number | boolean | undefined | null;
    checkOverQuotaOrNoPermission: (permission: string, restrictionName: string, currentCount: number) => {
        overQuota: boolean;
        noPermission: boolean;
        overQuotaOrNoPermission: boolean;
    };
    hasRole: (roleId: number) => boolean;
    isLoggedIn: boolean;
    isSubscribed: boolean;
    getRedirectUri: () => string;
}
export declare function useAuth(): UseAuthReturn;
export {};

import { AvatarProps } from '@common/ui/images/avatar';
import { User } from '@common/auth/user';
interface UserAvatarProps extends Omit<AvatarProps, 'label' | 'src' | 'link'> {
    user?: User;
}
export declare function UserAvatar({ user, ...props }: UserAvatarProps): import("react/jsx-runtime").JSX.Element;
export {};

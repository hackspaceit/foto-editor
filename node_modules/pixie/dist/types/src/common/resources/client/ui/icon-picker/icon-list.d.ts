import { IconTree } from '../../icons/create-svg-icon';
interface IconListProps {
    onIconSelected: (icon: IconTree[] | null) => void;
    searchQuery: string;
}
export default function IconList({ onIconSelected, searchQuery }: IconListProps): import("react/jsx-runtime").JSX.Element;
export {};

import { VotableModel } from '@common/votes/votable-model';
interface Props {
    model: VotableModel;
    className?: string;
    showUpvotesOnly?: boolean;
}
export declare function ThumbButtons({ model, className, showUpvotesOnly }: Props): import("react/jsx-runtime").JSX.Element;
export {};

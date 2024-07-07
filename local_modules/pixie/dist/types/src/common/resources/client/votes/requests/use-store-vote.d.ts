import { BackendResponse } from '@common/http/backend-response/backend-response';
import { VotableModel } from '@common/votes/votable-model';
interface Response extends BackendResponse {
    model: VotableModel;
}
interface Payload {
    voteType: 'upvote' | 'downvote';
}
export declare function useStoreVote(model: VotableModel): import("@tanstack/react-query").UseMutationResult<Response, Error, Payload, unknown>;
export {};

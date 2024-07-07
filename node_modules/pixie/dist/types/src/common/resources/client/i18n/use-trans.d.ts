import { MessageDescriptor } from './message-descriptor';
export interface UseTransReturn {
    trans: (props: MessageDescriptor) => string;
}
export declare function useTrans(): UseTransReturn;

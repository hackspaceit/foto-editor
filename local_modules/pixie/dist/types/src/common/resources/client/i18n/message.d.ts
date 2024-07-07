import { MessageDescriptor } from './message-descriptor';
interface MessageProps extends Omit<MessageDescriptor, 'message'> {
}
export declare function message(msg: string, props?: MessageProps): MessageDescriptor;
export {};

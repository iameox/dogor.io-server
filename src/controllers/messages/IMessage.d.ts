import { MessageType } from '@controllers/messages';

export interface IMessage<T> {
    readonly type: MessageType;
    readonly data: T;
}
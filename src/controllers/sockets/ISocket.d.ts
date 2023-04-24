import { IMessage } from '@controllers/messages';

export interface ISocket {
    onOpen(): Promise<void>;
    onMessage(data: string): Promise<void>;
    onClose(): Promise<void>;

    send<T>(message: IMessage<T>): Promise<void>;
    close(): Promise<void>;
}
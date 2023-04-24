import { BorderMessage, IMessage } from '@controllers/messages';
import { ISocket } from '@controllers/sockets';
import { IGame } from '@models/games';
import Util from 'util';
import { WebSocket } from 'ws';

export class Socket implements ISocket {
    protected _ws: WebSocket;
    protected _game: IGame;

    public constructor(ws: WebSocket, game: IGame) {
        this._ws = ws;
        this._game = game;
    }

    public async onOpen(): Promise<void> {
        await this.send(new BorderMessage(this._game));
    }

    public async onMessage(_: string): Promise<void> {
    }

    public async onClose(): Promise<void> {
    }

    public async send<T>(message: IMessage<T>): Promise<void> {
        const data = JSON.stringify({
            type: message.type,
            data: message.data
        });

        try {
            if (this._ws.readyState == WebSocket.OPEN)
                await Util.promisify(this._ws.send.bind(this._ws))(data);

        } catch (error) {
            console.warn(error);
        }
    }

    public async close(): Promise<void> {
        this._ws.close();
    }
}
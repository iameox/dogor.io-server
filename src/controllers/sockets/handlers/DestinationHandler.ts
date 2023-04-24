import { PlayerSocket } from '@controllers/sockets';
import { Point } from '@models/utils';
import AJV from 'ajv';
import { IHandler } from '.';

type IData = {
    x: number;
    y: number;
};

export class DestinationHandler implements IHandler {
    private static _validate = new AJV().compile<IData>({
        type: 'object',
        properties: {
            x: { type: 'integer' },
            y: { type: 'integer' }
        },
        required: [ 'x', 'y' ],
        additionalProperties: false
    });

    private _socket: PlayerSocket;
    private _data: unknown;

    public constructor(socket: PlayerSocket, data: unknown) {
        this._socket = socket;
        this._data = data;
    }

    public async handle(): Promise<void> {
        if (DestinationHandler._validate(this._data))
            this._socket.entity.move(new Point(this._data.x, this._data.y));
    }
}
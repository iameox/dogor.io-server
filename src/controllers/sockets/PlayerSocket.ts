import { Socket } from '@controllers/sockets';
import { EntityType, IEntity } from '@models/entities';
import { IGame } from '@models/games';
import { WebSocket } from 'ws';
import { DestinationHandler, HandlerType } from './handlers';

export class PlayerSocket extends Socket {
    private _entity: IEntity;

    public constructor(ws: WebSocket, game: IGame, entityType: EntityType) {
        super(ws, game);

        this._entity = this._game.entities.factory.create(entityType);
    }

    public get entity(): IEntity {
        return this._entity;
    }

    public override async onOpen(): Promise<void> {
        this._game.entities.add(this._entity);
        await super.onOpen();
    }

    public override async onMessage(data: string): Promise<void> {
        try {
            const message = JSON.parse(data);

            switch (message.type) {
                case HandlerType.DESTINATION:
                    await new DestinationHandler(this, message.data).handle();
            }

        } catch (error) {
            console.warn(error);
        }
    }

    public override async onClose(): Promise<void> {
        this._game.entities.delete(this._entity);
    }
}
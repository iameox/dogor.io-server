import { IMessage, MessageType } from '@controllers/messages';
import { EntityType, IEntity } from '@models/entities';

type IData = Array<{
    type: EntityType;
    position: {
        x: number;
        y: number;
    };
    radius: number;
}>;

export class UpdateMessage implements IMessage<IData> {
    private _entities: Array<IEntity>;

    public constructor(entities: Array<IEntity>) {
        this._entities = entities;
    }

    public get type(): MessageType {
        return MessageType.UPDATE;
    }

    public get data(): IData {
        return this._entities.map(entity => ({
            type: entity.type,
            position: {
                x: Math.floor(entity.position.x),
                y: Math.floor(entity.position.y)
            },
            radius: entity.radius
        }));
    }
}
import { EntityType, IEntity } from '@models/entities';
import { IFactory } from '@models/utils';
import { IGoal } from './goals';

export interface IGame {
    readonly width: number;
    readonly height: number;
    readonly goals: Array<IGoal>;
    readonly entities: Set<IEntity> & { factory: IFactory<EntityType, IEntity> };

    stop(): Promise<void>;
}
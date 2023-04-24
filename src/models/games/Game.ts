import { EntityFactory, EntityType, IEntity } from '@models/entities';
import { GameType, IGame } from '@models/games';
import { IFactory } from '@models/utils';
import { GoalFactory, GoalType, IGoal } from './goals';

export class Game implements IGame {
    private _width: number;
    private _height: number;
    private _goals: Array<IGoal>;
    private _entities: Set<IEntity> & { factory: IFactory<EntityType, IEntity> };
    private _clock?: NodeJS.Timer;

    public constructor(type: GameType, width: number, height: number, tick: number) {
        const goalFactory = new GoalFactory(this);

        this._width = width;
        this._height = height;
        this._goals = [ goalFactory.create(GoalType.LEFT) ];
        this._entities = Object.assign(new Set<IEntity>(), { factory: new EntityFactory(this) });
        this._clock = setInterval(this._entities.forEach.bind(this._entities), tick, entity => entity.tick());

        if (type == GameType.VERSUS)
            this._goals.push(goalFactory.create(GoalType.RIGHT));
    }

    public get width(): number {
        return this._width;
    }

    public get height(): number {
        return this._height;
    }

    public get goals(): Array<IGoal> {
        return this._goals;
    }

    public get entities(): Set<IEntity> & { factory: IFactory<EntityType, IEntity> } {
        return this._entities;
    }

    public async stop(): Promise<void> {
        clearInterval(this._clock);
        this._entities.clear();
    }
}
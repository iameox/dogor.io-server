import { EntityType, IEntity } from '@models/entities';
import { IGame } from '@models/games';
import { IFactory } from '@models/utils';
import { Configuration } from 'Configuration';
import { BotEntity } from './BotEntity';
import { Entity } from './Entity';

export class EntityFactory implements IFactory<EntityType, IEntity> {
    private _game: IGame;
    private _botId: number;

    public constructor(game: IGame) {
        this._game = game;
        this._botId = 1;
    }

    public create(type: EntityType): IEntity {
        switch (type) {
            case EntityType.BOT:
                return this._createBot();

            case EntityType.BLUE:
                return this._createBlue();

            case EntityType.CYAN:
                return this._createCyan();

            case EntityType.GREEN:
                return this._createGreen();

            case EntityType.MAGENTA:
                return this._createMagenta();

            case EntityType.RED:
                return this._createRed();

            case EntityType.YELLOW:
                return this._createYellow();
        }
    }

    private _createBot(): IEntity {
        return new BotEntity(
            this._game,
            this._botId++,
            Configuration.ENTITY_RADIUS,
            Configuration.BOT_ENTITY_VELOCITY,
            Configuration.BOT_ENTITY_RANGE,
            Configuration.BOT_ENTITY_VIEW_WIDTH,
            Configuration.BOT_ENTITY_VIEW_HEIGHT,
            Configuration.BOT_ENTITY_SPECIAL
        );
    }

    private _createBlue(): IEntity {
        return new Entity(
            this._game,
            EntityType.BLUE,
            Configuration.ENTITY_RADIUS,
            Configuration.BLUE_ENTITY_VELOCITY,
            Configuration.BLUE_ENTITY_RANGE,
            Configuration.BLUE_ENTITY_VIEW_WIDTH,
            Configuration.BLUE_ENTITY_VIEW_HEIGHT,
            Configuration.BLUE_ENTITY_SPECIAL
        );
    }

    private _createCyan(): IEntity {
        return new Entity(
            this._game,
            EntityType.CYAN,
            Configuration.ENTITY_RADIUS,
            Configuration.CYAN_ENTITY_VELOCITY,
            Configuration.CYAN_ENTITY_RANGE,
            Configuration.CYAN_ENTITY_VIEW_WIDTH,
            Configuration.CYAN_ENTITY_VIEW_HEIGHT,
            Configuration.CYAN_ENTITY_SPECIAL
        );
    }

    private _createGreen(): IEntity {
        return new Entity(
            this._game,
            EntityType.GREEN,
            Configuration.ENTITY_RADIUS,
            Configuration.GREEN_ENTITY_VELOCITY,
            Configuration.GREEN_ENTITY_RANGE,
            Configuration.GREEN_ENTITY_VIEW_WIDTH,
            Configuration.GREEN_ENTITY_VIEW_HEIGHT,
            Configuration.GREEN_ENTITY_SPECIAL
        );
    }

    private _createMagenta(): IEntity {
        return new Entity(
            this._game,
            EntityType.MAGENTA,
            Configuration.ENTITY_RADIUS,
            Configuration.MAGENTA_ENTITY_VELOCITY,
            Configuration.MAGENTA_ENTITY_RANGE,
            Configuration.MAGENTA_ENTITY_VIEW_WIDTH,
            Configuration.MAGENTA_ENTITY_VIEW_HEIGHT,
            Configuration.MAGENTA_ENTITY_SPECIAL
        );
    }

    private _createRed(): IEntity {
        return new Entity(
            this._game,
            EntityType.RED,
            Configuration.ENTITY_RADIUS,
            Configuration.RED_ENTITY_VELOCITY,
            Configuration.RED_ENTITY_RANGE,
            Configuration.RED_ENTITY_VIEW_WIDTH,
            Configuration.RED_ENTITY_VIEW_HEIGHT,
            Configuration.RED_ENTITY_SPECIAL
        );
    }

    private _createYellow(): IEntity {
        return new Entity(
            this._game,
            EntityType.YELLOW,
            Configuration.ENTITY_RADIUS,
            Configuration.YELLOW_ENTITY_VELOCITY,
            Configuration.YELLOW_ENTITY_RANGE,
            Configuration.YELLOW_ENTITY_VIEW_WIDTH,
            Configuration.YELLOW_ENTITY_VIEW_HEIGHT,
            Configuration.YELLOW_ENTITY_SPECIAL
        );
    }
}
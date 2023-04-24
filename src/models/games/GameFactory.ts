import { GameType, IGame } from '@models/games';
import { IFactory } from '@models/utils';
import { Configuration } from 'Configuration';
import { Game } from './Game';

export class GameFactory implements IFactory<GameType, IGame> {
    public create(type: GameType): IGame {
        switch (type) {
            case GameType.COOP:
                return this._createCoop();

            case GameType.VERSUS:
                return this._createVersus();
        }
    }

    private _createCoop(): IGame {
        return new Game(
            GameType.COOP,
            Configuration.GAME_WIDTH,
            Configuration.GAME_HEIGHT,
            Configuration.GAME_TICK
        );
    }

    private _createVersus(): IGame {
        return new Game(
            GameType.VERSUS,
            Configuration.GAME_WIDTH,
            Configuration.GAME_HEIGHT,
            Configuration.GAME_TICK
        );
    }
}
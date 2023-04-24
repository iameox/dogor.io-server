import { IGame } from '@models/games';
import { IFactory } from '@models/utils';
import { Configuration } from 'Configuration';
import { GoalType, IGoal } from '.';
import { Goal } from './Goal';

export class GoalFactory implements IFactory<GoalType, IGoal> {
    private _game: IGame;

    public constructor(game: IGame) {
        this._game = game;
    }

    public create(type: GoalType): IGoal {
        switch (type) {
            case GoalType.LEFT:
                return this._createLeft();

            case GoalType.RIGHT:
                return this._createRight();
        }
    }

    private _createLeft(): IGoal {
        return new Goal(
            this._game,
            GoalType.LEFT,
            Configuration.GOAL_RADIUS
        );
    }

    private _createRight(): IGoal {
        return new Goal(
            this._game,
            GoalType.RIGHT,
            Configuration.GOAL_RADIUS
        );
    }
}
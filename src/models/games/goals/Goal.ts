import { IGame } from '@models/games';
import { Point } from '@models/utils';
import { GoalType, IGoal } from '.';

export class Goal implements IGoal {
    private _position: Point;
    private _radius: number;
    private _destinations: Array<Point>;

    public constructor(game: IGame, type: GoalType, radius: number) {
        const x = type == GoalType.LEFT ? 0 : game.width;
        const factor = type == GoalType.LEFT ? 1 : -1;

        this._position = new Point(x, game.height / 2);
        this._radius = radius;
        this._destinations = [];

        for (let i = 0; i < 24; ++i)
            this._destinations.push(new Point(
                this._position.x + i % 3 * this._radius / 6 * factor,
                this._position.y + i % 8 * this._radius / 16
            ));
    }

    public get position(): Point {
        return this._position;
    }

    public get radius(): number {
        return this._radius;
    }

    public get destinations(): Array<Point> {
        return this._destinations;
    }
}
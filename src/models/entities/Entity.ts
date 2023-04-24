import { EntityType, IEntity } from '@models/entities';
import { IGame } from '@models/games';
import { Point, Vector } from '@models/utils';

export class Entity implements IEntity {
    protected _game: IGame;
    protected _type: EntityType;
    protected _position: Point;
    protected _destination: Point;
    protected _radius: number;
    protected _velocity: number;
    protected _range: number;
    protected _viewWidth: number;
    protected _viewHeight: number;
    protected _special: boolean;

    public constructor(game: IGame, type: EntityType, radius: number, velocity: number, range: number, viewWidth: number, viewHeight: number, special: boolean) {
        const x = radius + Math.random() * (game.width - 2 * radius);
        const y = radius + Math.random() * (game.height - 2 * radius);

        this._game = game;
        this._type = type;
        this._position = new Point(x, y);
        this._destination = this._position;
        this._radius = radius;
        this._velocity = velocity;
        this._range = range;
        this._viewWidth = viewWidth;
        this._viewHeight = viewHeight;
        this._special = special;
    }

    public get type(): EntityType {
        return this._type;
    }

    public get position(): Point {
        return this._position;
    }

    public get radius(): number {
        return this._radius;
    }

    public get velocity(): number {
        return this._velocity;
    }

    public get range(): number {
        return this._range;
    }

    public get special(): boolean {
        return this._special;
    }

    public get view(): Array<IEntity> {
        const view = [];

        for (let entity of this._game.entities) {
            const x = Math.abs(entity.position.x - this._position.x);
            const y = Math.abs(entity.position.y - this._position.y);

            if (x < this._viewWidth && y < this._viewHeight)
                view.push(entity);
        }

        return view;
    }

    public move(destination: Point) {
        this._destination = destination;
    }

    public tick(): void {
        let vector = new Vector(this._position, this._destination);
        if (vector.x == 0 && vector.y == 0)
            return;

        if (this._position.distance(this._destination) > this._velocity)
            vector = vector.normalize().scale(this._velocity);

        const radius = 1.25 * this._radius;
        const position = new Point(
            Math.max(radius, Math.min(this._position.x, this._game.width - radius)),
            Math.max(radius, Math.min(this._position.y, this._game.height - radius))
        );
        const destination = position.translate(vector.scale(0.5));

        this._position = new Point(
            Math.max(this._radius, Math.min(destination.x, this._game.width - this._radius)),
            Math.max(this._radius, Math.min(destination.y, this._game.height - this._radius))
        );
    }
}
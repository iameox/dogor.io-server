import { Vector } from '@models/utils';

export class Point {
    public static readonly ORIGIN = new Point(0, 0);

    private _x: number;
    private _y: number;

    public constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public translate(vector: Vector): Point {
        const x = this._x + vector.x;
        const y = this._y + vector.y;

        return new Point(x, y);
    }

    public distance(point: Point): number {
        const x = this._x - point._x;
        const y = this._y - point._y;

        return Math.sqrt(x * x + y * y);
    }
}
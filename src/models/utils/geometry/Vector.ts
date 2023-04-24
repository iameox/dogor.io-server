import { Point } from '@models/utils';

export class Vector {
    private _point: Point;

    public constructor(origin: Point, destination: Point) {
        const x = destination.x - origin.x;
        const y = destination.y - origin.y;

        this._point = new Point(x, y);
    }

    public get x(): number {
        return this._point.x;
    }

    public get y(): number {
        return this._point.y;
    }

    public add(vector: Vector): Vector {
        const destination = this._point.translate(vector);
        return new Vector(Point.ORIGIN, destination);
    }

    public scale(factor: number): Vector {
        const x = this._point.x * factor;
        const y = this._point.y * factor;
        const destination = new Point(x, y);

        return new Vector(Point.ORIGIN, destination);
    }

    public normalize(): Vector {
        const factor = 1 / Point.ORIGIN.distance(this._point);
        return this.scale(factor);
    }
}
import { Point } from '@models/utils';

export interface IGoal {
    readonly position: Point;
    readonly radius: number;
    readonly destinations: Array<Point>;
}
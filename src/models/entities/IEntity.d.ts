import { EntityType } from '@models/entities';
import { Point } from '@models/utils';

export interface IEntity {
    readonly type: EntityType;
    readonly position: Point;
    readonly radius: number;
    readonly velocity: number;
    readonly range: number;
    readonly special: boolean;

    readonly view: Array<IEntity>;

    move(destination: Point): void;
    tick(): void;
}
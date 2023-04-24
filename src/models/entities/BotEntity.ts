import { EntityType } from '@models/entities';
import { IGame } from '@models/games';
import { Point, Vector } from '@models/utils';
import { Entity } from './Entity';

export class BotEntity extends Entity {
    private _id: number;

    public constructor(game: IGame, id: number, radius: number, velocity: number, range: number, viewWidth: number, viewHeight: number, special: boolean) {
        super(game, EntityType.BOT, radius, velocity, range, viewWidth, viewHeight, special);

        this._id = id;
    }

    public override tick(): void {
        const goal = this._game.goals.find(goal => goal.position.distance(this.position) <= goal.radius);
        let movement = new Vector(Point.ORIGIN, Point.ORIGIN);

        for (let entity of this._game.entities) {
            if (entity instanceof BotEntity || goal && !entity.special)
                continue;

            const distance = entity.position.distance(this.position);
            if (distance == 0 || distance >= entity.range)
                continue;

            const vector = new Vector(entity.position, this.position);
            movement = movement.add(vector.normalize().scale(entity.range / distance));
        }

        if (movement.x != 0 || movement.y != 0)
            movement = movement.normalize().scale(this._velocity);

        else if (goal)
            movement = new Vector(this.position, goal.destinations[this._id % goal.destinations.length]!);

        this.move(this.position.translate(movement));
        super.tick();
    }
}
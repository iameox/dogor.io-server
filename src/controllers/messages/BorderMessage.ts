import { IMessage, MessageType } from '@controllers/messages';
import { IGame } from '@models/games';

type IData = {
    width: number;
    height: number;
    goals: Array<{
        position: {
            x: number;
            y: number;
        };
        radius: number;
    }>;
};

export class BorderMessage implements IMessage<IData> {
    private _game: IGame;

    public constructor(game: IGame) {
        this._game = game;
    }

    public get type(): MessageType {
        return MessageType.BORDER;
    }

    public get data(): IData {
        return {
            width: this._game.width,
            height: this._game.height,
            goals: this._game.goals.map(goal => ({
                position: {
                    x: Math.floor(goal.position.x),
                    y: Math.floor(goal.position.y)
                },
                radius: goal.radius
            }))
        };
    }
}
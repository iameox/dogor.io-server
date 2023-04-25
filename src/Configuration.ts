import { GameType } from '@models/games';
import dotenv from 'dotenv';

dotenv.config();

export class Configuration {
    public static readonly WS_PORT = parseInt(process.env['WS_PORT'] || '') || 80;

    public static readonly SERVER_TICK = parseInt(process.env['SERVER_TICK'] || '') || 50;
    public static readonly GAME_TICK = parseInt(process.env['GAME_TICK'] || '') || 25;

    public static readonly GAME_TYPE = parseInt(process.env['GAME_TYPE'] || '') || GameType.COOP;
    public static readonly GAME_WIDTH = parseInt(process.env['GAME_WIDTH'] || '') || 9000;
    public static readonly GAME_HEIGHT = parseInt(process.env['GAME_HEIGHT'] || '') || 6000;
    public static readonly GOAL_RADIUS = parseInt(process.env['GOAL_RADIUS'] || '') || 900;

    public static readonly ENTITY_RADIUS = parseInt(process.env['ENTITY_RADIUS'] || '') || 32;
    public static readonly NUMBER_BOTS = parseInt(process.env['NUMBER_BOTS'] || '') || 10;

    public static readonly BOT_ENTITY_VELOCITY = parseInt(process.env['BOT_ENTITY_VELOCITY'] || '') || 15;
    public static readonly BOT_ENTITY_RANGE = parseInt(process.env['BOT_ENTITY_RANGE'] || '') || 0;
    public static readonly BOT_ENTITY_VIEW_WIDTH = parseInt(process.env['BOT_ENTITY_VIEW_WIDTH'] || '') || 10000;
    public static readonly BOT_ENTITY_VIEW_HEIGHT = parseInt(process.env['BOT_ENTITY_VIEW_HEIGHT'] || '') || 10000;
    public static readonly BOT_ENTITY_SPECIAL = process.env['BOT_ENTITY_SPECIAL'] === 'true';

    public static readonly BLUE_ENTITY_VELOCITY = parseInt(process.env['BLUE_ENTITY_VELOCITY'] || '') || 40;
    public static readonly BLUE_ENTITY_RANGE = parseInt(process.env['BLUE_ENTITY_RANGE'] || '') || 0;
    public static readonly BLUE_ENTITY_VIEW_WIDTH = parseInt(process.env['BLUE_ENTITY_VIEW_WIDTH'] || '') || 1000;
    public static readonly BLUE_ENTITY_VIEW_HEIGHT = parseInt(process.env['BLUE_ENTITY_VIEW_HEIGHT'] || '') || 1000;
    public static readonly BLUE_ENTITY_SPECIAL = process.env['BLUE_ENTITY_SPECIAL'] === 'true';

    public static readonly CYAN_ENTITY_VELOCITY = parseInt(process.env['CYAN_ENTITY_VELOCITY'] || '') || 3;
    public static readonly CYAN_ENTITY_RANGE = parseInt(process.env['CYAN_ENTITY_RANGE'] || '') || 300;
    public static readonly CYAN_ENTITY_VIEW_WIDTH = parseInt(process.env['CYAN_ENTITY_VIEW_WIDTH'] || '') || 300;
    public static readonly CYAN_ENTITY_VIEW_HEIGHT = parseInt(process.env['CYAN_ENTITY_VIEW_HEIGHT'] || '') || 300;
    public static readonly CYAN_ENTITY_SPECIAL = process.env['CYAN_ENTITY_SPECIAL'] !== 'false';

    public static readonly GREEN_ENTITY_VELOCITY = parseInt(process.env['GREEN_ENTITY_VELOCITY'] || '') || 20;
    public static readonly GREEN_ENTITY_RANGE = parseInt(process.env['GREEN_ENTITY_RANGE'] || '') || 300;
    public static readonly GREEN_ENTITY_VIEW_WIDTH = parseInt(process.env['GREEN_ENTITY_VIEW_WIDTH'] || '') || 400;
    public static readonly GREEN_ENTITY_VIEW_HEIGHT = parseInt(process.env['GREEN_ENTITY_VIEW_HEIGHT'] || '') || 400;
    public static readonly GREEN_ENTITY_SPECIAL = process.env['GREEN_ENTITY_SPECIAL'] === 'true';

    public static readonly MAGENTA_ENTITY_VELOCITY = parseInt(process.env['MAGENTA_ENTITY_VELOCITY'] || '') || 15;
    public static readonly MAGENTA_ENTITY_RANGE = parseInt(process.env['MAGENTA_ENTITY_RANGE'] || '') || 200;
    public static readonly MAGENTA_ENTITY_VIEW_WIDTH = parseInt(process.env['MAGENTA_ENTITY_VIEW_WIDTH'] || '') || 200;
    public static readonly MAGENTA_ENTITY_VIEW_HEIGHT = parseInt(process.env['MAGENTA_ENTITY_VIEW_HEIGHT'] || '') || 800;
    public static readonly MAGENTA_ENTITY_SPECIAL = process.env['MAGENTA_ENTITY_SPECIAL'] === 'true';

    public static readonly RED_ENTITY_VELOCITY = parseInt(process.env['RED_ENTITY_VELOCITY'] || '') || 6;
    public static readonly RED_ENTITY_RANGE = parseInt(process.env['RED_ENTITY_RANGE'] || '') || 50;
    public static readonly RED_ENTITY_VIEW_WIDTH = parseInt(process.env['RED_ENTITY_VIEW_WIDTH'] || '') || 100;
    public static readonly RED_ENTITY_VIEW_HEIGHT = parseInt(process.env['RED_ENTITY_VIEW_HEIGHT'] || '') || 100;
    public static readonly RED_ENTITY_SPECIAL = process.env['RED_ENTITY_SPECIAL'] !== 'false';

    public static readonly YELLOW_ENTITY_VELOCITY = parseInt(process.env['YELLOW_ENTITY_VELOCITY'] || '') || 30;
    public static readonly YELLOW_ENTITY_RANGE = parseInt(process.env['YELLOW_ENTITY_RANGE'] || '') || 100;
    public static readonly YELLOW_ENTITY_VIEW_WIDTH = parseInt(process.env['YELLOW_ENTITY_VIEW_WIDTH'] || '') || 300;
    public static readonly YELLOW_ENTITY_VIEW_HEIGHT = parseInt(process.env['YELLOW_ENTITY_VIEW_HEIGHT'] || '') || 300;
    public static readonly YELLOW_ENTITY_SPECIAL = process.env['YELLOW_ENTITY_SPECIAL'] === 'true';
}
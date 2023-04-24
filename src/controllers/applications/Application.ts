import { IApplication } from '@controllers/applications';
import { UpdateMessage } from '@controllers/messages';
import { ISocket, PlayerSocket, Socket } from '@controllers/sockets';
import { EntityType } from '@models/entities';
import { GameFactory, IGame } from '@models/games';
import { Configuration } from 'Configuration';
import { Server as HTTPServer } from 'http';
import Process from 'process';
import Util from 'util';
import { Server as WSServer, WebSocket } from 'ws';

export class Application implements IApplication {
    private _httpServer: HTTPServer;
    private _wsServer: WSServer<WebSocket & { socket: ISocket }>;
    private _game: IGame;
    private _clock?: NodeJS.Timer;

    public constructor() {
        this._httpServer = new HTTPServer();
        this._wsServer = new WSServer({ noServer: true });
        this._game = new GameFactory().create(Configuration.GAME_TYPE);

        for (let i = 0; i < Configuration.NUMBER_BOTS; ++i)
            this._game.entities.add(this._game.entities.factory.create(EntityType.BOT));

        this._httpServer.on('upgrade', async (req, socket, head) => {
            const url = new URL(req.url!, `ws://${req.headers.host}`);
            let ws: WebSocket & { socket: ISocket };

            if (url.pathname == '/play') {
                const type = Number(url.searchParams.get('type'));
                if (isNaN(type) || !(type in EntityType) || type == EntityType.BOT)
                    return socket.destroy();

                ws = await Util.promisify<WebSocket & { socket: ISocket }>(cb => {
                    this._wsServer.handleUpgrade(req, socket, head, ws => cb(null, ws));
                })();
                ws.socket = new PlayerSocket(ws, this._game, type);

            } else if (url.pathname == '/spectate') {
                ws = await Util.promisify<WebSocket & { socket: ISocket }>(cb => {
                    this._wsServer.handleUpgrade(req, socket, head, ws => cb(null, ws));
                })();
                ws.socket = new Socket(ws, this._game);

            } else
                return socket.destroy();

            return this._wsServer.emit('connection', ws, req);
        });

        this._wsServer.on('connection', async ws => {
            await ws.socket.onOpen();
            ws.on('message', ws.socket.onMessage.bind(ws.socket));
            ws.on('close', ws.socket.onClose.bind(ws.socket));
        });

        Process.on('uncaughtException', this.stop.bind(this));
        Process.on('unhandledRejection', this.stop.bind(this));
        Process.on('SIGTERM', this.stop.bind(this));
        Process.on('SIGINT', this.stop.bind(this));
    }

    public async start(): Promise<void> {
        await Util.promisify<void>(cb => this._httpServer.listen(Configuration.WS_PORT, () => cb(null)))();

        this._clock = setInterval(async () => {
            const spectatorUpdate = new UpdateMessage([...this._game.entities]);
            const promises = [];

            for (let ws of this._wsServer.clients)
                if (ws.socket instanceof PlayerSocket)
                    promises.push(ws.socket.send(new UpdateMessage(ws.socket.entity.view)))
                else
                    promises.push(ws.socket.send(spectatorUpdate));

            await Promise.allSettled(promises);
        }, Configuration.SERVER_TICK);
    }

    public async stop(error?: unknown): Promise<void> {
        if (error)
            console.error(error);

        try {
            clearInterval(this._clock);

            await this._game.stop();
            await Promise.all([
                Util.promisify(this._wsServer.close.bind(this._wsServer))(),
                Util.promisify(this._wsServer.close.bind(this._wsServer))()
            ]);
            this._httpServer.closeAllConnections()
            await Util.promisify(this._httpServer.close.bind(this._httpServer))();

        } catch (error) {
            console.warn(error);
        }

        Process.exit(error ? 1 : 0);
    }
}
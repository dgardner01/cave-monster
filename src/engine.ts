import * as ROT from 'rot-js';

import { handleInput } from './input-handler';
import { Entity } from './entity';
import { GameMap } from './game-map';
import { generateDungeon } from './procgen';
import { MessageLog } from './message-log';

export class Engine {
    public static readonly WIDTH = 64;
    public static readonly HEIGHT = 40;
    public static readonly MAP_WIDTH = 64;
    public static readonly MAP_HEIGHT = 32;
    public static readonly MIN_ROOM_SIZE = 6;
    public static readonly MAX_ROOM_SIZE = 10;
    public static readonly MAX_ROOMS = 30;
    public static readonly MAX_ENTITIES_PER_ROOM = 20;

    display: ROT.Display;
    gameMap: GameMap;
    messageLog: MessageLog;
    player: Entity;

    constructor(player: Entity) {
        this.player = player;

        this.display = new ROT.Display({
            width: Engine.WIDTH,
            height: Engine.HEIGHT,
            forceSquareRatio: true,
        });
        const container = this.display.getContainer()!;
        document.body.appendChild(container);
        this.messageLog = new MessageLog();
        this.messageLog.addMessage(
            '==================================',
            '#ffffff',
        );
        this.messageLog.addMessage(
            '===  LEECHCRAFT: CAVE MONSTER  ===',
            '#ffffff',
        );
        this.messageLog.addMessage(
            '==================================',
            '#ffffff',
        );
        this.messageLog.addMessage(
            '===    MOVE WITH ARROW KEYS    ===',
            '#ffffff',
        );
        this.messageLog.addMessage(
            '===   WALK INTO TO INTERACT    ===',
            '#ffffff',
        );
        this.messageLog.addMessage(
            '=== REFRESH TO REGENERATE CAVE ===',
            '#ffffff',
        );
        this.messageLog.addMessage(
            '==================================',
            '#ffffff',
        );

        this.gameMap = generateDungeon(
            Engine.MAP_WIDTH,
            Engine.MAP_HEIGHT,
            Engine.MAX_ROOMS,
            Engine.MIN_ROOM_SIZE,
            Engine.MAX_ROOM_SIZE,
            Engine.MAX_ENTITIES_PER_ROOM,
            player,
            this.display,
        );

        window.addEventListener('keydown', (event) => {
            this.update(event);
        });

        this.gameMap.updateFov(this.player);
        this.render();
    }

    update(event: KeyboardEvent) {
        this.display.clear();
        const action = handleInput(event);

        if (action) {
            action.perform(this, this.player);
        }

        this.gameMap.updateFov(this.player);
        this.render();
    }

    render() {
        this.messageLog.render(this.display, 0, 30, 60, 9);
        this.gameMap.render();
    }
}
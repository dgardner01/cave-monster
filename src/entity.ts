export class Entity {

    constructor(
        public x: number,
        public y: number,
        public char: string,
        public fg: string = '#fff',
        public bg: string = '#000',
        public name: string = '<Unnamed>',
        public blocksMovement: boolean = false,
    ) {
    }

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}

export function spawnStalactite(x: number, y: number): Entity {
    return new Entity(x, y, 'V', '#aa0000', '#000', 'A HANGING STALACTITE.', false);
}

export function spawnStalagmite(x: number, y: number): Entity {
    return new Entity(x, y, '^', '#aa0000', '#000', 'A RISING STALAGMITE.', false);
}

export function spawnSmallBat(x: number, y: number): Entity {
    return new Entity(x, y, 'w', '#fff', '#000', 'A SMALL BAT. WORTHLESS UNTIL GROWN FAT WITH BLOOD.', false);
}

export function spawnBigBat(x: number, y: number): Entity {
    return new Entity(x, y, 'W', '#fff', '#000', 'A BIG BAT. A FOUL THING, IF FILLING.', false);
}

export function spawnPuddle(x: number, y: number): Entity {
    return new Entity(x, y, '~', '#fff', '#aaaaaa', 'A PUDDLE. IT OFFERS NO REFLECTION.', false);
}

export function spawnRoots(x: number, y: number): Entity {
    return new Entity(x, y, '%', '#000', '#555555', 'SOME CAVE ROOTS. INEDIBLE.', false);
}

export function spawnCoins(x: number, y: number): Entity {
    return new Entity(x, y, 'c', '#000', '#ffff55', 'SOME GOLD COINS. NO NEED FOR THESE NOW.', false);
}

export function spawnCoffin(x: number, y: number): Entity {
    return new Entity(x, y, '[', '#000000', '#aa5500', 'A COFFIN. MORE AND MORE PILING IN THESE TIMES.', true);
}

export function spawnHuman(x: number, y: number): Entity {
    return new Entity(x, y, '@', '#ffff55', '#000', 'A SLEEPING HUMAN, BUT YOU ARE NOT HUNGRY.', true);
}

export function spawnCursed(x: number, y: number): Entity {
    return new Entity(x, y, '@', '#00aa00', '#000', 'A CURSED ONE. LIKE OURS, THEIR DEAD WILL NOT REST EASY.', true);
}

export function spawnLeech(x: number, y: number): Entity {
    return new Entity(x, y, '~', '#aaaaaa', '#000', 'A CAVE LEECH. THE CLOSEST THING TO KIN YOU HAVE DOWN HERE.', false);
}

export function spawnJacket(x: number, y: number): Entity {
    return new Entity(x, y, '#', '#fff', '#5555ff', 'A MOTH-EATEN SILK JACKET. YES, YOU WERE NOBILITY, ONCE.', false);
}

export function spawnCoatOfArms1(x: number, y: number): Entity {
    return new Entity(x, y, '#', '#aa0000', '#fff', 'A COAT OF ARMS FROM LONG AGO. A SHAME WE THOUGHT WE COULD TRUST THE AUTHORITY.', false);
}

export function spawnCoatOfArms2(x: number, y: number): Entity {
    return new Entity(x, y, '#', '#0aaaa', '#aa00aa', 'A COAT OF ARMS. MUST BE THE CURRENT REGIME. A SHAME WE THOUGHT WE COULD TRUST THE AUTHORITY.', false);
}

export function spawnPlayer(x: number, y: number): Entity {
    return new Entity(x, y, '@', '#fff', '#000', 'Player', true);
}
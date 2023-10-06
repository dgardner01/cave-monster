export interface Graphic {
    char: string;
    fg: string;
    bg: string;
}

export interface Tile {
    walkable: boolean;
    transparent: boolean;
    visible: boolean;
    seen: boolean;
    dark: Graphic;
    light: Graphic;
}

export const FLOOR_TILE: Tile = {
    walkable: true,
    transparent: true,
    visible: false,
    seen: false,
    dark: { char: '*', fg: '#000000', bg: '#000000' },
    light: { char: '.', fg: '#aa0000', bg: '#ff5555' },
};

export const WALL_TILE: Tile = {
    walkable: false,
    transparent: false,
    visible: false,
    seen: false,
    dark: { char: '*', fg: '#aa0000', bg: '#000000' },
    light: { char: '#', fg: '#ff5555', bg: '#aa0000' },
};
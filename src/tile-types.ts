export interface Graphic {
    char: string;
    fg: string;
    bg: string;
}

export interface Tile {
    walkable: boolean;
    transparent: boolean;
    dark: Graphic;
}

export const FLOOR_TILE: Tile = {
    walkable: true,
    transparent: true,
    dark: { char: '.', fg: '#1b0202', bg: '#3c0505' },
};

export const WALL_TILE: Tile = {
    dark: { char: '~', fg: '#1b0202', bg: '#000' },
    walkable: false,
    transparent: false,
};
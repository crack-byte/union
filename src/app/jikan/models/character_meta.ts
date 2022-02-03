/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {character_images} from './character_images';

export type character_meta = {
    /**
     * MyAnimeList ID
     */
    mal_id?: number;
    /**
     * MyAnimeList URL
     */
    url?: string;
    images?: character_images;
    /**
     * Entry name
     */
    name?: string;
};

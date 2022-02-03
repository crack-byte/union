/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {character_images} from './character_images';
import type {mal_url} from './mal_url';

/**
 * Character Resource
 */
export type character = {
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
     * Name
     */
    name?: string;
    /**
     * Other Names
     */
    nicknames?: Array<string>;
    /**
     * Number of users who have favorited this entry
     */
    favorites?: number;
    /**
     * Synopsis
     */
    about?: string;
    animeography?: Array<({
image_url?: string;
role?: string;
} & mal_url)>;
    mangaography?: Array<({
image_url?: string;
role?: string;
} & mal_url)>;
    voice_actors?: Array<({
image_url?: string;
language?: string;
} & mal_url)>;
};

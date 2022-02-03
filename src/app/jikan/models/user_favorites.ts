/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {anime_meta} from './anime_meta';
import type {manga_meta} from './manga_meta';

export type user_favorites = {
    /**
     * Favorite entries
     */
    data?: {
/**
 * Favorite Anime
 */
anime?: Array<({
type?: string;
start_year?: number;
} & anime_meta)>;
/**
 * Favorite Manga
 */
manga?: Array<({
type?: string;
start_year?: number;
} & manga_meta)>;
/**
 * Favorite Characters
 */
characters?: Array<({
?: mal_url_2;
} & character_meta)>;
/**
 * Favorite People
 */
people?: Array<{
?: character_meta;
}>;
};
};

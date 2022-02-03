/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {daterange} from './daterange';
import type {mal_url} from './mal_url';
import type {manga_images} from './manga_images';

/**
 * Manga Resource
 */
export type manga = {
    /**
     * MyAnimeList ID
     */
    mal_id?: number;
    /**
     * MyAnimeList URL
     */
    url?: string;
    images?: manga_images;
    /**
     * Title
     */
    title?: string;
    /**
     * English Title
     */
    title_english?: string;
    /**
     * Japanese Title
     */
    title_japanese?: string;
    /**
     * Other Titles
     */
    title_synonyms?: Array<string>;
    /**
     * Manga Type
     */
    type?: manga.type;
    /**
     * Chapter count
     */
    chapters?: number;
    /**
     * Volume count
     */
    volumnes?: number;
    /**
     * Publishing status
     */
    status?: manga.status;
    /**
     * Publishing boolean
     */
    publishing?: boolean;
    published?: daterange;
    /**
     * Score
     */
    score?: number;
    /**
     * Number of users
     */
    scored_by?: number;
    /**
     * Ranking
     */
    rank?: number;
    /**
     * Popularity
     */
    popularity?: number;
    /**
     * Number of users who have added this entry to their list
     */
    members?: number;
    /**
     * Number of users who have favorited this entry
     */
    favorites?: number;
    /**
     * Synopsis
     */
    synopsis?: string;
    /**
     * Background
     */
    background?: string;
    authors?: Array<mal_url>;
    serializations?: Array<mal_url>;
    genres?: Array<mal_url>;
    explicit_genres?: Array<mal_url>;
    themes?: Array<mal_url>;
    demographics?: Array<mal_url>;
};

export namespace manga {

    /**
     * Manga Type
     */
    export enum type {
        MANGA = 'Manga',
        NOVEL = 'Novel',
        ONE_SHOT = 'One-shot',
        DOUJINSHI = 'Doujinshi',
        MANHUA = 'Manhua',
        MANHWA = 'Manhwa',
        OEL = 'OEL',
    }

    /**
     * Publishing status
     */
    export enum status {
        FINISHED = 'Finished',
        PUBLISHING = 'Publishing',
        ON_HIATUS = 'On Hiatus',
        DISCONTINUED = 'Discontinued',
        NOT_YET_PUBLISHED = 'Not yet published',
    }


}

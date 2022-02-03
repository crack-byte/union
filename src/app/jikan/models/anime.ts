/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {anime_images} from './anime_images';
import type {broadcast} from './broadcast';
import type {daterange} from './daterange';
import type {mal_url} from './mal_url';
import type {trailer_base} from './trailer_base';

/**
 * Anime Resource
 */
export type anime = {
    /**
     * MyAnimeList ID
     */
    mal_id?: number;
    /**
     * MyAnimeList URL
     */
    url?: string;
    images?: anime_images;
    trailer?: trailer_base;
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
     * Anime Type
     */
    type?: anime.type;
    /**
     * Original Material/Source adapted from
     */
    source?: string;
    /**
     * Episode count
     */
    episodes?: number;
    /**
     * Airing status
     */
    status?: anime.status;
    /**
     * Airing boolean
     */
    airing?: boolean;
    aired?: daterange;
    /**
     * Parsed raw duration
     */
    duration?: string;
    /**
     * Anime audience rating
     */
    rating?: anime.rating;
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
    /**
     * Season
     */
    season?: anime.season;
    /**
     * Year
     */
    year?: number;
    broadcast?: broadcast;
    producers?: Array<mal_url>;
    licensors?: Array<mal_url>;
    studios?: Array<mal_url>;
    genres?: Array<mal_url>;
    explicit_genres?: Array<mal_url>;
    themes?: Array<mal_url>;
    demographics?: Array<mal_url>;
};

export namespace anime {

    /**
     * Anime Type
     */
    export enum type {
        TV = 'TV',
        OVA = 'OVA',
        MOVIE = 'Movie',
        SPECIAL = 'Special',
        ONA = 'ONA',
        MUSIC = 'Music',
    }

    /**
     * Airing status
     */
    export enum status {
        FINISHED_AIRING = 'Finished Airing',
        CURRENTLY_AIRING = 'Currently Airing',
        NOT_YET_AIRED = 'Not yet aired',
    }

    /**
     * Anime audience rating
     */
    export enum rating {
        G_ALL_AGES = 'G - All Ages',
        PG_CHILDREN = 'PG - Children',
        PG_13_TEENS_13_OR_OLDER = 'PG-13 - Teens 13 or older',
        R_17_VIOLENCE_PROFANITY_ = 'R - 17+ (violence & profanity)',
        R_MILD_NUDITY = 'R+ - Mild Nudity',
        RX_HENTAI = 'Rx - Hentai',
    }

    /**
     * Season
     */
    export enum season {
        SUMMER = 'Summer',
        WINTER = 'Winter',
        SPRING = 'Spring',
        FALL = 'Fall',
    }


}

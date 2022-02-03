/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {people_images} from './people_images';

/**
 * Person Resource
 */
export type person = {
    /**
     * MyAnimeList ID
     */
    mal_id?: number;
    /**
     * MyAnimeList URL
     */
    url?: string;
    /**
     * Person's website URL
     */
    website_url?: string;
    images?: people_images;
    /**
     * Name
     */
    name?: string;
    /**
     * Given Name
     */
    given_name?: string;
    /**
     * Family Name
     */
    family_name?: string;
    /**
     * Other Names
     */
    alternate_names?: Array<string>;
    /**
     * Birthday Date ISO8601
     */
    birthday?: string;
    /**
     * Number of users who have favorited this entry
     */
    favorites?: number;
    /**
     * Biography
     */
    about?: string;
};

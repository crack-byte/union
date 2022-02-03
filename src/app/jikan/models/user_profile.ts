/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {user_images} from './user_images';

export type user_profile = {
    /**
     * MyAnimeList ID
     */
    mal_id?: number;
    /**
     * MyAnimeList Username
     */
    username?: string;
    /**
     * MyAnimeList URL
     */
    url?: string;
    images?: user_images;
    /**
     * Last Online Date ISO8601
     */
    last_online?: string;
    /**
     * User Gender
     */
    gender?: string;
    /**
     * Birthday Date ISO8601
     */
    birthday?: string;
    /**
     * Location
     */
    location?: string;
    /**
     * Joined Date ISO8601
     */
    joined?: string;
};

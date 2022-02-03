/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {manga_images} from './manga_images';

export type manga_meta = {
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
     * Entry title
     */
    title?: string;
};

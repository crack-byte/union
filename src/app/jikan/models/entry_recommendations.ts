/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {anime_meta} from './anime_meta';
import type {manga_meta} from './manga_meta';

/**
 * Entry Recommendations Resource
 */
export type entry_recommendations = {
    data?: Array<{
/**
 * Array of 2 entries that are being recommended to each other
 */
entry?: Array<(anime_meta | manga_meta)>;
/**
 * Recommendation MyAnimeList URL
 */
url?: string;
/**
 * Number of users who have recommended this entry
 */
votes?: number;
}>;
};

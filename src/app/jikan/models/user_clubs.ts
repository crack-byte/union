/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {pagination} from './pagination';

/**
 * User Clubs
 */
export type user_clubs = ({
data?: Array<{
/**
 * MyAnimeList ID
 */
mal_id?: number;
/**
 * Club Name
 */
name?: string;
/**
 * Club URL
 */
url?: string;
}>;
} & pagination);

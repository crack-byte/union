/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {pagination} from './pagination';

/**
 * Anime Episodes Resource
 */
export type anime_episodes = ({
data?: Array<{
/**
 * MyAnimeList ID
 */
mal_id?: number;
/**
 * MyAnimeList URL
 */
url?: string;
/**
 * Title
 */
title?: string;
/**
 * Title Japanese
 */
title_japanese?: string;
/**
 * title_romanji
 */
title_romanji?: string;
/**
 * Episode duration in seconds
 */
duration?: number;
/**
 * Aired Date ISO8601
 */
aired?: string;
/**
 * Filler episode
 */
filler?: boolean;
/**
 * Recap episode
 */
recap?: boolean;
/**
 * Episode discussion forum URL
 */
forum_url?: string;
}>;
} & pagination);

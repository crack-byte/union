/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Anime Episode Resource
 */
export type anime_episode = {
    data?: {
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
 * Episode Synopsis
 */
synopsis?: string;
};
};
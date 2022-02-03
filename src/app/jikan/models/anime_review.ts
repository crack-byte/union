/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type anime_review = {
    /**
     * MyAnimeList ID
     */
    mal_id?: number;
    /**
     * MyAnimeList URL
     */
    url?: string;
    /**
     * Entry Type
     */
    type?: string;
    /**
     * Number of user votes on the Review
     */
    votes?: number;
    /**
     * Review created date ISO8601
     */
    date?: string;
    /**
     * Review content
     */
    review?: string;
    /**
     * Number of episodes watched
     */
    episodes_watched?: number;
    /**
     * Review Scores breakdown
     */
    scores?: {
/**
 * Overall Score
 */
overall?: number;
/**
 * Story Score
 */
story?: number;
/**
 * Animation Score
 */
animation?: number;
/**
 * Sound Score
 */
sound?: number;
/**
 * Character Score
 */
character?: number;
/**
 * Enjoyment Score
 */
enjoyment?: number;
};
};
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type manga_review = {
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
     * Number of chapters read by the reviewer
     */
    chapters_read?: number;
    /**
     * Review content
     */
    review?: string;
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
 * Art Score
 */
art?: number;
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
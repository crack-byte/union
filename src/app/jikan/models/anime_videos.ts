/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {common_images} from './common_images';
import type {trailer} from './trailer';

/**
 * Anime Videos Resource
 */
export type anime_videos = {
    data?: {
promos?: Array<{
/**
 * Title
 */
title?: string;
trailer?: trailer;
}>;
episodes?: Array<{
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
 * Episode
 */
episode?: string;
images?: common_images;
}>;
};
};

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {pagination} from './pagination';
import type {user_meta} from './user_meta';

/**
 * Anime User Updates Resource
 */
export type anime_userupdates = ({
data?: Array<{
user?: user_meta;
/**
 * User Score
 */
score?: number;
/**
 * User list status
 */
status?: string;
/**
 * Number of episodes seen
 */
episodes_seen?: number;
/**
 * Total number of episodes
 */
episodes_total?: number;
/**
 * Last updated date ISO8601
 */
date?: string;
}>;
} & pagination);

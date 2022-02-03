/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {anime} from './anime';
import type {pagination} from './pagination';

/**
 * Anime resources currently airing
 */
export type schedules = ({
data?: Array<anime>;
} & pagination);

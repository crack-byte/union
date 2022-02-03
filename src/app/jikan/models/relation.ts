/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {mal_url} from './mal_url';

/**
 * Related resources
 */
export type relation = Array<{
/**
 * Relation type
 */
relation?: string;
/**
 * Related items
 */
items?: Array<mal_url>;
}>;

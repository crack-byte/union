/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {manga} from './manga';
import type {pagination} from './pagination';

/**
 * Manga Search Resource
 */
export type manga_search = ({
data?: Array<manga>;
} & pagination);

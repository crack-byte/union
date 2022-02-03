/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {character} from './character';
import type {pagination} from './pagination';

/**
 * Characters Search Resource
 */
export type characters_search = ({
data?: Array<character>;
} & pagination);

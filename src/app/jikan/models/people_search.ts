/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {pagination} from './pagination';
import type {person} from './person';

/**
 * People Search
 */
export type people_search = ({
data?: Array<person>;
} & pagination);

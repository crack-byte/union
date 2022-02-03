/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {magazine} from './magazine';
import type {pagination} from './pagination';

/**
 * Magazine Collection Resource
 */
export type magazines = {
    data?: (pagination & magazine);
};

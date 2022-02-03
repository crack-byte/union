/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {pagination} from './pagination';
import type {producer} from './producer';

/**
 * Producer Collection Resource
 */
export type producers = {
    data?: (pagination & producer);
};

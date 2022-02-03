/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {manga_meta} from './manga_meta';

/**
 * Person's mangaography
 */
export type person_manga = {
    data?: Array<{
/**
 * Person's position
 */
position?: string;
manga?: manga_meta;
}>;
};

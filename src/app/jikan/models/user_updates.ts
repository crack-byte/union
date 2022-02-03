/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type {anime_meta} from './anime_meta';
import type {manga_meta} from './manga_meta';

export type user_updates = {
    data?: {
/**
 * Last updated Anime
 */
anime?: Array<({
entry?: anime_meta;
} & {
score?: number;
status?: string;
episodes_seen?: number;
episodes_total?: number;
/**
 * ISO8601 format
 */
date?: string;
})>;
/**
 * Last updated Manga
 */
manga?: Array<({
entry?: manga_meta;
} & {
score?: number;
status?: string;
chapters_read?: number;
chapters_total?: number;
volumes_read?: number;
volumes_total?: number;
/**
 * ISO8601 format
 */
date?: string;
})>;
};
};

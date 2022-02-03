/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {anime_meta} from '../models/anime_meta';
import type {anime_review} from '../models/anime_review';
import type {anime_search} from '../models/anime_search';
import type {characters_search} from '../models/characters_search';
import type {manga_meta} from '../models/manga_meta';
import type {manga_review} from '../models/manga_review';
import type {manga_search} from '../models/manga_search';
import type {pagination} from '../models/pagination';
import type {people_search} from '../models/people_search';
import type {user_meta} from '../models/user_meta';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class TopService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns anime_search Returns top anime
     * @throws ApiError
     */
    public getTopAnime(): Observable<anime_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/top/anime',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns manga_search Returns top manga
     * @throws ApiError
     */
    public getTopManga(): Observable<manga_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/top/manga',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns people_search Returns top people
     * @throws ApiError
     */
    public getTopPeople(): Observable<people_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/top/people',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns characters_search Returns top characters
     * @throws ApiError
     */
    public getTopCharacters(): Observable<characters_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/top/characters',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns any Returns top reviews
     * @throws ApiError
     */
    public getTopReviews(): Observable<{
data?: ({
data?: Array<(({
user?: user_meta;
} & {
anime?: anime_meta;
} & anime_review) | ({
user?: user_meta;
} & {
manga?: manga_meta;
} & manga_review))>;
} & pagination);
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/top/reviews',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

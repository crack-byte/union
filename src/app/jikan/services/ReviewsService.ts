/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {anime_meta} from '../models/anime_meta';
import type {anime_review} from '../models/anime_review';
import type {manga_meta} from '../models/manga_meta';
import type {manga_review} from '../models/manga_review';
import type {pagination} from '../models/pagination';
import type {user_meta} from '../models/user_meta';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class ReviewsService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns any Returns recent anime reviews
     * @throws ApiError
     */
    public getRecentAnimeReviews(): Observable<{
data?: ({
data?: Array<({
user?: user_meta;
} & {
anime?: anime_meta;
} & anime_review)>;
} & pagination);
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/reviews/anime',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns any Returns recent manga reviews
     * @throws ApiError
     */
    public getRecentMangaReviews(): Observable<{
data?: ({
data?: Array<({
user?: user_meta;
} & {
manga?: manga_meta;
} & manga_review)>;
} & pagination);
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/reviews/manga',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

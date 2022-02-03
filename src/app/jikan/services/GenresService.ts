/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {genre_query_filter} from '../models/genre_query_filter';
import type {genres} from '../models/genres';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class GenresService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @param page
     * @param limit
     * @param filter
     * @returns genres Returns entry genres, explicit_genres, themes and demographics
     * @throws ApiError
     */
    public getAnimeGenres(
page?: number,
limit?: number,
filter?: genre_query_filter,
): Observable<genres> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/genres/anime',
            query: {
                'page': page,
                'limit': limit,
                'filter': filter,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param page
     * @param limit
     * @param filter
     * @returns genres Returns entry genres, explicit_genres, themes and demographics
     * @throws ApiError
     */
    public getMangaGenres(
page?: number,
limit?: number,
filter?: genre_query_filter,
): Observable<genres> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/genres/manga',
            query: {
                'page': page,
                'limit': limit,
                'filter': filter,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

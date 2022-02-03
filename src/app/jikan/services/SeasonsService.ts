/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {anime_search} from '../models/anime_search';
import type {seasons} from '../models/seasons';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class SeasonsService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns anime_search Returns seasonal anime
     * @throws ApiError
     */
    public getSeason(): Observable<anime_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/seasons/{year}/{season}',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns seasons Returns available list of seasons
     * @throws ApiError
     */
    public getSeasons(): Observable<seasons> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/seasons',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns anime_search Returns upcoming season's anime
     * @throws ApiError
     */
    public getSeasonUpcoming(): Observable<anime_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/seasons/upcoming',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

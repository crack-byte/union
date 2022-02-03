/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {watch_episodes} from '../models/watch_episodes';
import type {watch_promos} from '../models/watch_promos';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class WatchService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns watch_episodes Returns Recently Added Episodes
     * @throws ApiError
     */
    public getWatchRecentEpisodes(): Observable<watch_episodes> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/watch/episodes',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns watch_episodes Returns Popular Episodes
     * @throws ApiError
     */
    public getWatchPopularEpisodes(): Observable<watch_episodes> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/watch/episodes/popular',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns watch_promos Returns Recently Added Promotional Videos
     * @throws ApiError
     */
    public getWatchRecentPromos(): Observable<watch_promos> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/watch/promos',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns watch_promos Returns Popular Promotional Videos
     * @throws ApiError
     */
    public getWatchPopularPromos(): Observable<watch_promos> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/watch/promos/popular',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

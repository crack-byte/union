import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {recommendations} from '../models/recommendations';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns recommendations Returns recent anime recommendations
     * @throws ApiError
     */
    public getRecentAnimeRecommendations(): Observable<recommendations> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/recommendations/anime',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns recommendations Returns recent manga recommendations
     * @throws ApiError
     */
    public getRecentMangaRecommendations(): Observable<recommendations> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/recommendations/manga',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

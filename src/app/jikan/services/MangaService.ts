/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {entry_recommendations} from '../models/entry_recommendations';
import type {forum} from '../models/forum';
import type {manga} from '../models/manga';
import type {manga_characters} from '../models/manga_characters';
import type {manga_news} from '../models/manga_news';
import type {manga_reviews} from '../models/manga_reviews';
import type {manga_search} from '../models/manga_search';
import type {manga_search_query_orderby} from '../models/manga_search_query_orderby';
import type {manga_search_query_status} from '../models/manga_search_query_status';
import type {manga_search_query_type} from '../models/manga_search_query_type';
import type {manga_statistics} from '../models/manga_statistics';
import type {manga_userupdates} from '../models/manga_userupdates';
import type {moreinfo} from '../models/moreinfo';
import type {pictures} from '../models/pictures';
import type {relation} from '../models/relation';
import type {search_query_sort} from '../models/search_query_sort';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class MangaService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns manga Returns pictures related to the entry
     * @throws ApiError
     */
    public getMangaById(): Observable<manga> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns manga_characters Returns manga characters resource
     * @throws ApiError
     */
    public getMangaCharacters(): Observable<manga_characters> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/characters',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns manga_news Returns a list of manga news topics
     * @throws ApiError
     */
    public getMangaNews(): Observable<manga_news> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/news',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns forum Returns a list of manga forum topics
     * @throws ApiError
     */
    public getMangaTopics(): Observable<forum> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/forum',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns pictures Returns a list of manga forum topics
     * @throws ApiError
     */
    public getMangaPictures(): Observable<pictures> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/pictures',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns manga_statistics Returns anime statistics
     * @throws ApiError
     */
    public getMangaStatistics(): Observable<manga_statistics> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/statistics',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns moreinfo Returns manga moreinfo
     * @throws ApiError
     */
    public getMangaMoreInfo(): Observable<moreinfo> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/moreinfo',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns entry_recommendations Returns manga recommendations
     * @throws ApiError
     */
    public getMangaRecommendations(): Observable<entry_recommendations> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/recommendations',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns manga_userupdates Returns manga user updates
     * @throws ApiError
     */
    public getMangaUserUpdates(): Observable<manga_userupdates> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/userupdates',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns manga_reviews Returns manga reviews
     * @throws ApiError
     */
    public getMangaReviews(): Observable<manga_reviews> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/reviews',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param id
     * @returns relation Returns manga relations
     * @throws ApiError
     */
    public getMangaRelations(
id: number,
): Observable<relation> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga/{id}/relations',
            path: {
                'id': id,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param page
     * @param limit
     * @param q
     * @param type
     * @param score
     * @param status
     * @param sfw Filter out Adult entries
     * @param genres Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3
     * @param orderBy
     * @param sort
     * @param letter Return entries starting with the given letter
     * @param magazine Filter by producer(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3
     * @returns manga_search Returns search results for manga
     * @throws ApiError
     */
    public getMangaSearch(
page?: number,
limit?: number,
q?: string,
type?: manga_search_query_type,
score?: number,
status?: manga_search_query_status,
sfw?: boolean,
genres?: string,
orderBy?: manga_search_query_orderby,
sort?: search_query_sort,
letter?: string,
magazine?: string,
): Observable<manga_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/manga',
            query: {
                'page': page,
                'limit': limit,
                'q': q,
                'type': type,
                'score': score,
                'status': status,
                'sfw': sfw,
                'genres': genres,
                'order_by': orderBy,
                'sort': sort,
                'letter': letter,
                'magazine': magazine,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

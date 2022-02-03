/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {people_search} from '../models/people_search';
import type {people_search_query_orderby} from '../models/people_search_query_orderby';
import type {person_anime} from '../models/person_anime';
import type {person_manga} from '../models/person_manga';
import type {person_pictures} from '../models/person_pictures';
import type {person_voice_acting_roles} from '../models/person_voice_acting_roles';
import type {pictures_variants} from '../models/pictures_variants';
import type {search_query_sort} from '../models/search_query_sort';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class PeopleService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @param id
     * @returns pictures_variants Returns pictures related to the entry
     * @throws ApiError
     */
    public getPersonById(
id: number,
): Observable<pictures_variants> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/people/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns person_anime Returns person's anime staff positions
     * @throws ApiError
     */
    public getPersonAnime(): Observable<person_anime> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/people/{id}/anime',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns person_voice_acting_roles Returns person's voice acting roles
     * @throws ApiError
     */
    public getPersonVoices(): Observable<person_voice_acting_roles> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/people/{id}/voices',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns person_manga Returns person's published manga works
     * @throws ApiError
     */
    public getPersonManga(): Observable<person_manga> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/people/{id}/manga',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param id
     * @returns person_pictures Returns a list of pictures of the person
     * @throws ApiError
     */
    public getPersonPictures(
id: number,
): Observable<person_pictures> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/people/{id}/pictures',
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
     * @param orderBy
     * @param sort
     * @param letter Return entries starting with the given letter
     * @returns people_search Returns search results for people
     * @throws ApiError
     */
    public getPeopleSearch(
page?: number,
limit?: number,
q?: string,
orderBy?: people_search_query_orderby,
sort?: search_query_sort,
letter?: string,
): Observable<people_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/people',
            query: {
                'page': page,
                'limit': limit,
                'q': q,
                'order_by': orderBy,
                'sort': sort,
                'letter': letter,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {club} from '../models/club';
import type {club_member} from '../models/club_member';
import type {club_relations} from '../models/club_relations';
import type {club_search_query_category} from '../models/club_search_query_category';
import type {club_search_query_orderby} from '../models/club_search_query_orderby';
import type {club_search_query_type} from '../models/club_search_query_type';
import type {club_staff} from '../models/club_staff';
import type {clubs_search} from '../models/clubs_search';
import type {pagination} from '../models/pagination';
import type {search_query_sort} from '../models/search_query_sort';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class ClubsService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @param id
     * @returns club Returns Club Resource
     * @throws ApiError
     */
    public getClubsById(
id: number,
): Observable<club> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/clubs/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param id
     * @param page
     * @returns any Returns Club Members Resource
     * @throws ApiError
     */
    public getClubMembers(
id: number,
page?: number,
): Observable<(pagination & club_member)> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/clubs/{id}/members',
            path: {
                'id': id,
            },
            query: {
                'page': page,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param id
     * @returns club_staff Returns Club Staff
     * @throws ApiError
     */
    public getClubStaff(
id: number,
): Observable<club_staff> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/clubs/{id}/staff',
            path: {
                'id': id,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param id
     * @returns club_relations Returns Club Relations
     * @throws ApiError
     */
    public getClubRelations(
id: number,
): Observable<club_relations> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/clubs/{id}/relations',
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
     * @param category
     * @param orderBy
     * @param sort
     * @param letter Return entries starting with the given letter
     * @returns clubs_search Returns search results for clubs
     * @throws ApiError
     */
    public getClubsSearch(
page?: number,
limit?: number,
q?: string,
type?: club_search_query_type,
category?: club_search_query_category,
orderBy?: club_search_query_orderby,
sort?: search_query_sort,
letter?: string,
): Observable<clubs_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/clubs',
            query: {
                'page': page,
                'limit': limit,
                'q': q,
                'type': type,
                'category': category,
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

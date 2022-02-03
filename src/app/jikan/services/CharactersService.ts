/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {character} from '../models/character';
import type {character_anime} from '../models/character_anime';
import type {character_manga} from '../models/character_manga';
import type {character_voice_actors} from '../models/character_voice_actors';
import type {characters_search} from '../models/characters_search';
import type {characters_search_query_orderby} from '../models/characters_search_query_orderby';
import type {pictures} from '../models/pictures';
import type {search_query_sort} from '../models/search_query_sort';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class CharactersService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @param id
     * @returns character Returns character resource
     * @throws ApiError
     */
    public getCharacterById(
id: number,
): Observable<character> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/characters/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns character_anime Returns anime that character is in
     * @throws ApiError
     */
    public getCharacterAnime(): Observable<character_anime> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/characters/{id}/anime',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns character_manga Returns manga that character is in
     * @throws ApiError
     */
    public getCharacterManga(): Observable<character_manga> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/characters/{id}/manga',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns character_voice_actors Returns the character's voice actors
     * @throws ApiError
     */
    public getCharacterVoiceActors(): Observable<character_voice_actors> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/characters/{id}/voices',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param id
     * @returns pictures Returns pictures related to the entry
     * @throws ApiError
     */
    public getCharacterPictures(
id: number,
): Observable<pictures> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/characters/{id}/pictures',
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
     * @returns characters_search Returns search results for characters
     * @throws ApiError
     */
    public getCharactersSearch(
page?: number,
limit?: number,
q?: string,
orderBy?: characters_search_query_orderby,
sort?: search_query_sort,
letter?: string,
): Observable<characters_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/characters',
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

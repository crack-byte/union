/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {anime} from '../models/anime';
import type {character} from '../models/character';
import type {manga} from '../models/manga';
import type {person} from '../models/person';
import type {user_profile} from '../models/user_profile';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class RandomService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns any Returns a random anime resource
     * @throws ApiError
     */
    public getRandomAnime(): Observable<{
data?: anime;
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/random/anime',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns any Returns a random manga resource
     * @throws ApiError
     */
    public getRandomManga(): Observable<{
data?: manga;
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/random/manga',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns any Returns a random character resource
     * @throws ApiError
     */
    public getRandomCharacters(): Observable<{
data?: character;
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/random/characters',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns any Returns a random person resource
     * @throws ApiError
     */
    public getRandomPeople(): Observable<{
data?: person;
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/random/people',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns any Returns a random user profile resource
     * @throws ApiError
     */
    public getRandomUsers(): Observable<{
data?: user_profile;
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/random/users',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

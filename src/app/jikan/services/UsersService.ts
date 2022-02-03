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
import type {recommendations} from '../models/recommendations';
import type {user_about} from '../models/user_about';
import type {user_by_id} from '../models/user_by_id';
import type {user_clubs} from '../models/user_clubs';
import type {user_favorites} from '../models/user_favorites';
import type {user_friends} from '../models/user_friends';
import type {user_history} from '../models/user_history';
import type {user_meta} from '../models/user_meta';
import type {user_profile} from '../models/user_profile';
import type {user_statistics} from '../models/user_statistics';
import type {user_updates} from '../models/user_updates';
import type {users_search} from '../models/users_search';
import type {users_search_query_gender} from '../models/users_search_query_gender';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class UsersService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @param page
     * @param limit
     * @param q
     * @param gender
     * @param location
     * @param maxAge
     * @param minAge
     * @returns users_search Returns search results for users
     * @throws ApiError
     */
    public getUsersSearch(
page?: number,
limit?: number,
q?: string,
gender?: users_search_query_gender,
location?: string,
maxAge?: number,
minAge?: number,
): Observable<users_search> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users',
            query: {
                'page': page,
                'limit': limit,
                'q': q,
                'gender': gender,
                'location': location,
                'maxAge': maxAge,
                'minAge': minAge,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @returns user_by_id Returns username by ID search
     * @throws ApiError
     */
    public getUserById(): Observable<user_by_id> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/userbyid',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns user_profile Returns user profile
     * @throws ApiError
     */
    public getUserProfile(
username: string,
): Observable<user_profile> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns user_statistics Returns user statistics
     * @throws ApiError
     */
    public getUserStatistics(
username: string,
): Observable<user_statistics> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/statistics',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns user_favorites Returns user favorites
     * @throws ApiError
     */
    public getUserFavorites(
username: string,
): Observable<user_favorites> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/favorites',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns user_updates Returns user updates
     * @throws ApiError
     */
    public getUserUpdates(
username: string,
): Observable<user_updates> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/userupdates',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns user_about Returns user about in raw HTML
     * @throws ApiError
     */
    public getUserAbout(
username: string,
): Observable<user_about> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/about',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @param type
     * @returns user_history Returns user history (past 30 days)
     * @throws ApiError
     */
    public getUserHistory(
username: string,
type?: 'anime' | 'manga',
): Observable<user_history> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/history/{type}',
            path: {
                'username': username,
                'type': type,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns user_friends Returns user friends
     * @throws ApiError
     */
    public getUserFriends(
username: string,
): Observable<user_friends> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/friends',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns any Returns user anime list
     * @throws ApiError
     */
    public getUserAnimelist(
username: string,
): Observable<any> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/animelist',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns any Returns user manga list
     * @throws ApiError
     */
    public getUserMangaList(
username: string,
): Observable<any> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/mangalist',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns any Returns user reviews
     * @throws ApiError
     */
    public getUserReviews(
username: string,
): Observable<{
data?: ({
data?: Array<(({
user?: user_meta;
} & {
anime?: anime_meta;
} & anime_review) | ({
user?: user_meta;
} & {
manga?: manga_meta;
} & manga_review))>;
} & pagination);
}> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/reviews',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns recommendations Returns Recent Anime Recommendations
     * @throws ApiError
     */
    public getUserRecommendations(
username: string,
): Observable<recommendations> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/recommendations',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

    /**
     * @param username
     * @returns user_clubs Returns user clubs
     * @throws ApiError
     */
    public getUserClubs(
username: string,
): Observable<user_clubs> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/users/{username}/clubs',
            path: {
                'username': username,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

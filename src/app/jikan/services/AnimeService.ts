import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {anime} from '../models/anime';
import type {anime_characters} from '../models/anime_characters';
import type {anime_episode} from '../models/anime_episode';
import type {anime_episodes} from '../models/anime_episodes';
import type {anime_news} from '../models/anime_news';
import type {anime_reviews} from '../models/anime_reviews';
import type {anime_search} from '../models/anime_search';
import type {anime_search_query_orderby} from '../models/anime_search_query_orderby';
import type {anime_search_query_rating} from '../models/anime_search_query_rating';
import type {anime_search_query_status} from '../models/anime_search_query_status';
import type {anime_search_query_type} from '../models/anime_search_query_type';
import type {anime_staff} from '../models/anime_staff';
import type {anime_statistics} from '../models/anime_statistics';
import type {anime_themes} from '../models/anime_themes';
import type {anime_userupdates} from '../models/anime_userupdates';
import type {anime_videos} from '../models/anime_videos';
import type {entry_recommendations} from '../models/entry_recommendations';
import type {forum} from '../models/forum';
import type {moreinfo} from '../models/moreinfo';
import type {pictures_variants} from '../models/pictures_variants';
import type {relation} from '../models/relation';
import type {search_query_sort} from '../models/search_query_sort';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private readonly http: HttpClient) {
  }

  /**
   * @param id
   * @returns any Returns anime resource
   * @throws ApiError
   */
  public getAnimeById(id: number): Observable<{
    data?: anime;
  }> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}',
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
   * @returns anime_characters Returns anime characters resource
   * @throws ApiError
   */
  public getAnimeCharacters(
    id: number,
  ): Observable<anime_characters> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/characters',
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
   * @returns anime_staff Returns anime staff resource
   * @throws ApiError
   */
  public getAnimeStaff(
    id: number,
  ): Observable<anime_staff> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/staff',
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
   * @returns anime_episodes Returns a list of anime episodes
   * @throws ApiError
   */
  public getAnimeEpisodes(
    id: number,
    page?: number,
  ): Observable<anime_episodes> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/episodes',
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
   * @param episode
   * @returns anime_episode Returns a single anime episode resource
   * @throws ApiError
   */
  public getAnimeEpisodeById(
    id: number,
    episode: number,
  ): Observable<anime_episode> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/episodes/{episode}',
      path: {
        'id': id,
        'episode': episode,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }

  /**
   * @param id
   * @param page
   * @returns anime_news Returns a list of news articles related to the entry
   * @throws ApiError
   */
  public getAnimeNews(
    id: number,
    page?: number,
  ): Observable<anime_news> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/news',
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
   * @param topic Filter topics
   * @returns forum Returns a list of forum topics related to the entry
   * @throws ApiError
   */
  public getAnimeForum(
    id: number,
    topic?: 'all' | 'episode' | 'other',
  ): Observable<forum> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/forum',
      path: {
        'id': id,
      },
      query: {
        'topic': topic,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }

  /**
   * @param id
   * @returns anime_videos Returns videos related to the entry
   * @throws ApiError
   */
  public getAnimeVideos(
    id: number,
  ): Observable<anime_videos> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/videos',
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
   * @returns pictures_variants Returns pictures related to the entry
   * @throws ApiError
   */
  public getAnimePictures(
    id: number,
  ): Observable<pictures_variants> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/pictures',
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
   * @returns anime_statistics Returns anime statistics
   * @throws ApiError
   */
  public getAnimeStatistics(
    id: number,
  ): Observable<anime_statistics> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/statistics',
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
   * @returns moreinfo Returns anime statistics
   * @throws ApiError
   */
  public getAnimeMoreInfo(
    id: number,
  ): Observable<moreinfo> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/moreinfo',
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
   * @returns entry_recommendations Returns anime recommendations
   * @throws ApiError
   */
  public getAnimeRecommendations(
    id: number,
  ): Observable<entry_recommendations> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/recommendations',
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
   * @returns anime_userupdates Returns a list of users who have added/updated/removed the entry on their list
   * @throws ApiError
   */
  public getAnimeUserUpdates(
    id: number,
    page?: number,
  ): Observable<anime_userupdates> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/userupdates',
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
   * @param page
   * @returns anime_reviews Returns anime reviews
   * @throws ApiError
   */
  public getAnimeReviews(
    id: number,
    page?: number,
  ): Observable<anime_reviews> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/reviews',
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
   * @returns relation Returns anime relations
   * @throws ApiError
   */
  public getAnimeRelations(): Observable<relation> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/relations',
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }

  /**
   * @returns anime_themes Returns anime themes
   * @throws ApiError
   */
  public getAnimeThemes(): Observable<anime_themes> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime/{id}/themes',
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
   * @param rating
   * @param sfw Filter out Adult entries
   * @param genres Filter by genre(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3
   * @param orderBy
   * @param sort
   * @param letter Return entries starting with the given letter
   * @param producer Filter by producer(s) IDs. Can pass multiple with a comma as a delimiter. e.g 1,2,3
   * @returns anime_search Returns search results for anime
   * @throws ApiError
   */
  public getAnimeSearch(
    page?: number,
    limit?: number,
    q?: string,
    type?: anime_search_query_type,
    score?: number,
    status?: anime_search_query_status,
    rating?: anime_search_query_rating,
    sfw?: boolean,
    genres?: string,
    orderBy?: anime_search_query_orderby,
    sort?: search_query_sort,
    letter?: string,
    producer?: string,
  ): Observable<anime_search> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime',
      query: {
        'page': page,
        'limit': limit,
        'q': q,
        'type': type,
        'score': score,
        'status': status,
        'rating': rating,
        'sfw': sfw,
        'genres': genres,
        'order_by': orderBy,
        'sort': sort,
        'letter': letter,
        'producer': producer,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }

  public getAnimeSearchWithOptions(options?:
                                     {
                                       page?: number,
                                       limit?: number,
                                       q?: string,
                                       type?: anime_search_query_type,
                                       score?: number,
                                       status?: anime_search_query_status,
                                       rating?: anime_search_query_rating,
                                       sfw?: boolean,
                                       genres?: string,
                                       orderBy?: anime_search_query_orderby,
                                       sort?: search_query_sort,
                                       letter?: string,
                                       producer?: string,
                                     }
  ): Observable<anime_search> {
    return __request(JikanApi, this.http, {
      method: 'GET',
      url: '/anime',
      query: {
        'page': options?.page,
        'limit': options?.limit,
        'q': options?.q,
        'type': options?.type,
        'score': options?.score,
        'status': options?.status,
        'rating': options?.rating,
        'sfw': options?.sfw,
        'genres': options?.genres,
        'order_by': options?.orderBy,
        'sort': options?.sort,
        'letter': options?.letter,
        'producer': options?.producer,
      },
      errors: {
        400: `Error: Bad request. When required parameters were not supplied.`,
      },
    });
  }
}

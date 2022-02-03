/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {schedules} from '../models/schedules';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class SchedulesService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @param topic Filter by day
     * @returns schedules Returns weekly schedule
     * @throws ApiError
     */
    public getSchedules(
topic?: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'unknown' | 'other',
): Observable<schedules> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/schedules',
            path: {
                'topic': topic,
            },
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

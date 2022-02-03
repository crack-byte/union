/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {producers} from '../models/producers';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class ProducersService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns producers Returns producers collection
     * @throws ApiError
     */
    public getProducers(): Observable<producers> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/producers',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

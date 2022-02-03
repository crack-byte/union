/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import type {Observable} from 'rxjs';

import type {magazines} from '../models/magazines';

import {JikanApi} from '../core/JikanApi';
import {request as __request} from '../core/request';

@Injectable()
export class MagazinesService {

    constructor(private readonly http: HttpClient) {}

    /**
     * @returns magazines Returns magazines collection
     * @throws ApiError
     */
    public getMagazines(): Observable<magazines> {
        return __request(JikanApi, this.http, {
            method: 'GET',
            url: '/magazines',
            errors: {
                400: `Error: Bad request. When required parameters were not supplied.`,
            },
        });
    }

}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from '../models/Employee';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns Employee OK
     * @throws ApiError
     */
    public static get(): CancelablePromise<Employee> {
        return __request({
            method: 'GET',
            path: `/api/me`,
        });
    }

}
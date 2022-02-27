/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeDto } from '../models/EmployeeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns EmployeeDto OK
     * @throws ApiError
     */
    public static get(): CancelablePromise<EmployeeDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/me',
        });
    }

}
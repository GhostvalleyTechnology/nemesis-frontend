/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeDto } from '../models/EmployeeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns EmployeeDto OK
     * @throws ApiError
     */
    public static get(): CancelablePromise<EmployeeDto> {
        return __request({
            method: 'GET',
            path: `/api/me`,
        });
    }

}
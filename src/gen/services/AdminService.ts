/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AdminService {

    /**
     * @returns any OK
     * @throws ApiError
     */
    public static dailyTasks(): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/admin/daily`,
        });
    }

}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ExampleResource {

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static hello(): CancelablePromise<string> {
        return __request({
            method: 'GET',
            path: `/api/hello`,
        });
    }

    /**
     * @returns void 
     * @throws ApiError
     */
    public static sendEmail(): CancelablePromise<void> {
        return __request({
            method: 'GET',
            path: `/api/hello/mail`,
        });
    }

}
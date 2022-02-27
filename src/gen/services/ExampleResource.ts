/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExampleResource {

    /**
     * @returns string OK
     * @throws ApiError
     */
    public static hello(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/hello',
        });
    }

    /**
     * @returns void 
     * @throws ApiError
     */
    public static sendEmail(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/hello/mail',
        });
    }

}
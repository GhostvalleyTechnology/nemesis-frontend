/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Partner } from '../models/Partner';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PartnerService {

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static add(
requestBody?: Partner,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/partner/add`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns Partner OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<Partner>> {
        return __request({
            method: 'GET',
            path: `/api/partner/list`,
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static update(
requestBody?: Partner,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/partner/update`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Client } from '../models/Client';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ClientService {

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static add(
requestBody?: Client,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/client/add`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static delete(
requestBody?: Client,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/client/delete`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns Client OK
     * @throws ApiError
     */
    public static get(
id: number,
): CancelablePromise<Client> {
        return __request({
            method: 'GET',
            path: `/api/client/get/${id}`,
        });
    }

    /**
     * @returns Client OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<Client>> {
        return __request({
            method: 'GET',
            path: `/api/client/list`,
        });
    }

    /**
     * @returns Client OK
     * @throws ApiError
     */
    public static listAll(): CancelablePromise<Array<Client>> {
        return __request({
            method: 'GET',
            path: `/api/client/list-all`,
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static update(
requestBody?: Client,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/client/update`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
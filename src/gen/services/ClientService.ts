/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientDto } from '../models/ClientDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClientService {

    /**
     * @param requestBody 
     * @returns string 
     * @throws ApiError
     */
    public static add(
requestBody?: ClientDto,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/client/add',
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'location',
        });
    }

    /**
     * @param clientId 
     * @returns any OK
     * @throws ApiError
     */
    public static delete(
clientId: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/client/delete/{clientId}',
            path: {
                'clientId': clientId,
            },
        });
    }

    /**
     * @param id 
     * @returns ClientDto OK
     * @throws ApiError
     */
    public static get(
id: number,
): CancelablePromise<ClientDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/client/get/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns ClientDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<ClientDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/client/list',
        });
    }

    /**
     * @returns ClientDto OK
     * @throws ApiError
     */
    public static listAll(): CancelablePromise<Array<ClientDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/client/list-all',
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static update(
requestBody?: ClientDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/client/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
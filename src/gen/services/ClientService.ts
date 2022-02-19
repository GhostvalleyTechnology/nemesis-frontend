/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientDto } from '../models/ClientDto';
import type { CancelablePromise } from '../core/CancelablePromise';
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
        return __request({
            method: 'POST',
            path: `/api/client/add`,
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
        return __request({
            method: 'DELETE',
            path: `/api/client/delete/${clientId}`,
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
        return __request({
            method: 'GET',
            path: `/api/client/get/${id}`,
        });
    }

    /**
     * @returns ClientDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<ClientDto>> {
        return __request({
            method: 'GET',
            path: `/api/client/list`,
        });
    }

    /**
     * @returns ClientDto OK
     * @throws ApiError
     */
    public static listAll(): CancelablePromise<Array<ClientDto>> {
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
requestBody?: ClientDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/client/update`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
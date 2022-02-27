/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientDocumentDto } from '../models/ClientDocumentDto';
import type { ClientDocumentType } from '../models/ClientDocumentType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClientDocumentService {

    /**
     * @param id 
     * @returns any OK
     * @throws ApiError
     */
    public static delete(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/client-document/delete/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id 
     * @returns any OK
     * @throws ApiError
     */
    public static get(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/client-document/get/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param formData 
     * @returns ClientDocumentDto OK
     * @throws ApiError
     */
    public static upload(
formData?: {
file?: Blob;
fileName?: string;
fileExtension?: string;
clientId?: number;
type?: ClientDocumentType;
},
): CancelablePromise<ClientDocumentDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/client-document/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
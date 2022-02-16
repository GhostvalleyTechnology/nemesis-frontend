/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientDocumentDto } from '../models/ClientDocumentDto';
import type { ClientDocumentType } from '../models/ClientDocumentType';
import type { CancelablePromise } from '../core/CancelablePromise';
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
        return __request({
            method: 'DELETE',
            path: `/api/client-document/delete/${id}`,
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
        return __request({
            method: 'GET',
            path: `/api/client-document/get/${id}`,
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
        return __request({
            method: 'POST',
            path: `/api/client-document/upload`,
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
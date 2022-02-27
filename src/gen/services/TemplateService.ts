/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TemplateDto } from '../models/TemplateDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TemplateService {

    /**
     * @param formData 
     * @returns any OK
     * @throws ApiError
     */
    public static add(
formData?: {
file?: Blob;
fileName?: string;
fileExtension?: string;
adminOnly?: boolean;
},
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/template/add',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param templateId 
     * @returns any OK
     * @throws ApiError
     */
    public static delete(
templateId: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/template/delete/{templateId}',
            path: {
                'templateId': templateId,
            },
        });
    }

    /**
     * @param templateId 
     * @returns any OK
     * @throws ApiError
     */
    public static get(
templateId: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/template/get/{templateId}',
            path: {
                'templateId': templateId,
            },
        });
    }

    /**
     * @returns TemplateDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<TemplateDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/template/list',
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static update(
requestBody?: TemplateDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/template/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Template } from '../models/Template';
import type { CancelablePromise } from '../core/CancelablePromise';
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
adminOnly?: boolean;
},
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/template/add`,
            formData: formData,
            mediaType: 'multipart/form-data',
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
        return __request({
            method: 'GET',
            path: `/api/template/get/${templateId}`,
        });
    }

    /**
     * @returns Template OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<Template>> {
        return __request({
            method: 'GET',
            path: `/api/template/list`,
        });
    }

}
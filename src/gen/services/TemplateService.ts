/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileDto } from '../models/FileDto';
import type { TemplateDto } from '../models/TemplateDto';
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
fileExtension?: string;
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
    public static delete(
templateId: number,
): CancelablePromise<any> {
        return __request({
            method: 'DELETE',
            path: `/api/template/delete/${templateId}`,
        });
    }

    /**
     * @param templateId 
     * @returns FileDto OK
     * @throws ApiError
     */
    public static get(
templateId: number,
): CancelablePromise<FileDto> {
        return __request({
            method: 'GET',
            path: `/api/template/get/${templateId}`,
        });
    }

    /**
     * @returns TemplateDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<TemplateDto>> {
        return __request({
            method: 'GET',
            path: `/api/template/list`,
        });
    }

}
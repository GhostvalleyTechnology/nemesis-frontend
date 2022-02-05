/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnerDto } from '../models/PartnerDto';
import type { PartnerReferenceDto } from '../models/PartnerReferenceDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PartnerService {

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static add(
requestBody?: PartnerDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/partner/add`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param partnerId 
     * @returns PartnerDto OK
     * @throws ApiError
     */
    public static get(
partnerId: number,
): CancelablePromise<PartnerDto> {
        return __request({
            method: 'GET',
            path: `/api/partner/get/${partnerId}`,
        });
    }

    /**
     * @returns PartnerReferenceDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<PartnerReferenceDto>> {
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
requestBody?: PartnerDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/partner/update`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnerServiceTypeDto } from '../models/PartnerServiceTypeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class PartnerServiceTypeService {

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static add(
requestBody?: PartnerServiceTypeDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/partner-service-type/add`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

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
            path: `/api/partner-service-type/delete/${id}`,
        });
    }

    /**
     * @returns PartnerServiceTypeDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<PartnerServiceTypeDto>> {
        return __request({
            method: 'GET',
            path: `/api/partner-service-type/list`,
        });
    }

}
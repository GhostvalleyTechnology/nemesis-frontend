/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProofOfIdentityDto } from '../models/ProofOfIdentityDto';
import type { ProofOfIdentityType } from '../models/ProofOfIdentityType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ProofOfIdentityService {

    /**
     * @param formData 
     * @returns ProofOfIdentityDto OK
     * @throws ApiError
     */
    public static add(
formData?: {
file?: Blob;
fileName?: string;
fileExtension?: string;
clientId?: number;
type?: ProofOfIdentityType;
},
): CancelablePromise<ProofOfIdentityDto> {
        return __request({
            method: 'POST',
            path: `/api/proof-of-identity/add`,
            formData: formData,
            mediaType: 'multipart/form-data',
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
            path: `/api/proof-of-identity/delete/${id}`,
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
            path: `/api/proof-of-identity/get/${id}`,
        });
    }

}
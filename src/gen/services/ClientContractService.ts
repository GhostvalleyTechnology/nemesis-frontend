/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientContractDto } from '../models/ClientContractDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClientContractService {

    /**
     * @param requestBody 
     * @returns ClientContractDto OK
     * @throws ApiError
     */
    public static add(
requestBody?: ClientContractDto,
): CancelablePromise<ClientContractDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/client-contract/add',
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
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/client-contract/delete/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param contractId 
     * @returns any OK
     * @throws ApiError
     */
    public static getPolicyRequest(
contractId: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/client-contract/get-policy-request/{contractId}',
            path: {
                'contractId': contractId,
            },
        });
    }

    /**
     * @param contractId 
     * @returns any OK
     * @throws ApiError
     */
    public static getPolicy(
contractId: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/client-contract/get-policy/{contractId}',
            path: {
                'contractId': contractId,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static update(
requestBody?: ClientContractDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/client-contract/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param formData 
     * @returns ClientContractDto OK
     * @throws ApiError
     */
    public static uploadPolicy(
formData?: {
file?: Blob;
fileName?: string;
fileExtension?: string;
clientContractId?: number;
},
): CancelablePromise<ClientContractDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/client-contract/upload-policy',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param formData 
     * @returns ClientContractDto OK
     * @throws ApiError
     */
    public static uploadPolicyRequest(
formData?: {
file?: Blob;
fileName?: string;
fileExtension?: string;
clientContractId?: number;
},
): CancelablePromise<ClientContractDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/client-contract/upload-policy-request',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
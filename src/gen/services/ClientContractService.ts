/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentFrequency } from '../models/PaymentFrequency';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ClientContractService {

    /**
     * @param formData 
     * @returns any OK
     * @throws ApiError
     */
    public static add(
formData?: {
file?: Blob;
fileName?: string;
clientId?: number;
legacy?: boolean;
contractNumber?: string;
paymentValue?: number;
paymentFrequency?: PaymentFrequency;
contractorId?: number;
},
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/client-contract/add`,
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param contractId 
     * @returns any OK
     * @throws ApiError
     */
    public static get(
contractId: number,
): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/api/client-contract/get/${contractId}`,
        });
    }

}
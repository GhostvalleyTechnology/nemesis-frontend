/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientContractWithPersonalInformationDto } from '../models/ClientContractWithPersonalInformationDto';
import type { EmployeeDto } from '../models/EmployeeDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EmployeeService {

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static add(
requestBody?: EmployeeDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/employee/add',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns ClientContractWithPersonalInformationDto OK
     * @throws ApiError
     */
    public static contracts(): CancelablePromise<Array<ClientContractWithPersonalInformationDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/employee/contracts',
        });
    }

    /**
     * @param id 
     * @returns EmployeeDto OK
     * @throws ApiError
     */
    public static get(
id: number,
): CancelablePromise<EmployeeDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/employee/get/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns EmployeeDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<EmployeeDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/employee/list',
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static update(
requestBody?: EmployeeDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/employee/update',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from '../models/Employee';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class EmployeeService {

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static add(
requestBody?: Employee,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/employee/add`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id 
     * @returns Employee OK
     * @throws ApiError
     */
    public static get(
id: number,
): CancelablePromise<Employee> {
        return __request({
            method: 'GET',
            path: `/api/employee/get/${id}`,
        });
    }

    /**
     * @returns Employee OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<Employee>> {
        return __request({
            method: 'GET',
            path: `/api/employee/list`,
        });
    }

    /**
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public static update(
requestBody?: Employee,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/employee/update`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmployeeDto } from '../models/EmployeeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
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
        return __request({
            method: 'POST',
            path: `/api/employee/add`,
            body: requestBody,
            mediaType: 'application/json',
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
        return __request({
            method: 'GET',
            path: `/api/employee/get/${id}`,
        });
    }

    /**
     * @returns EmployeeDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<EmployeeDto>> {
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
requestBody?: EmployeeDto,
): CancelablePromise<any> {
        return __request({
            method: 'POST',
            path: `/api/employee/update`,
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
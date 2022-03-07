/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReminderDto } from '../models/ReminderDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReminderService {

    /**
     * @returns ReminderDto OK
     * @throws ApiError
     */
    public static list(): CancelablePromise<Array<ReminderDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/reminder',
        });
    }

}
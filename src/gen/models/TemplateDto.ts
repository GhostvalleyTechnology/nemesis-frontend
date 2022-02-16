/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudFileDto } from './CloudFileDto';

export type TemplateDto = {
    id?: number;
    createdAt?: string;
    adminOnly?: boolean;
    file?: CloudFileDto;
}
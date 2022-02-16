/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientDocumentType } from './ClientDocumentType';
import type { CloudFileDto } from './CloudFileDto';

export type ClientDocumentDto = {
    id?: number;
    createdAt?: string;
    type?: ClientDocumentType;
    file?: CloudFileDto;
}
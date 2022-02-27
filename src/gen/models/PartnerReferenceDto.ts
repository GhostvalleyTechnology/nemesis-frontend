/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PartnerServiceTypeDto } from './PartnerServiceTypeDto';

export type PartnerReferenceDto = {
    id?: number;
    createdAt?: string;
    name?: string;
    services?: Array<PartnerServiceTypeDto>;
};
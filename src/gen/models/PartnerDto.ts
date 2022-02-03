/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PartnerContactDto } from './PartnerContactDto';
import type { PartnerLoginDto } from './PartnerLoginDto';
import type { PartnerServiceTypeDto } from './PartnerServiceTypeDto';

export type PartnerDto = {
    id?: number;
    createdAt?: string;
    name?: string;
    website?: string;
    bank?: string;
    iban?: string;
    bic?: string;
    services?: Array<PartnerServiceTypeDto>;
    logins?: Array<PartnerLoginDto>;
    contacts?: Array<PartnerContactDto>;
}
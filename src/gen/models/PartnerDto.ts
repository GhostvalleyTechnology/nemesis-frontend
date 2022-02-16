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
    services?: Array<PartnerServiceTypeDto>;
    website?: string;
    bank?: string;
    iban?: string;
    bic?: string;
    logins?: Array<PartnerLoginDto>;
    contacts?: Array<PartnerContactDto>;
}
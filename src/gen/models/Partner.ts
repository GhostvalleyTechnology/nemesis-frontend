/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PartnerContact } from './PartnerContact';
import type { PartnerLogin } from './PartnerLogin';
import type { PartnerServiceType } from './PartnerServiceType';

export type Partner = {
    id?: number;
    createdAt?: string;
    name?: string;
    website?: string;
    bank?: string;
    iban?: string;
    bic?: string;
    contacts?: Array<PartnerContact>;
    logins?: Array<PartnerLogin>;
    services?: Array<PartnerServiceType>;
}
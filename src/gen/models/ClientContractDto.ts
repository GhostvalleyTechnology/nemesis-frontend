/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PartnerReferenceDto } from './PartnerReferenceDto';
import type { PartnerServiceTypeDto } from './PartnerServiceTypeDto';
import type { PaymentFrequency } from './PaymentFrequency';

export type ClientContractDto = {
    id?: number;
    createdAt?: string;
    clientId?: number;
    legacy?: boolean;
    contractNumber?: string;
    paymentValue?: number;
    paymentFrequency?: PaymentFrequency;
    contractor?: PartnerReferenceDto;
    serviceType?: PartnerServiceTypeDto;
    fileId?: number;
}
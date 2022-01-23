/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Partner } from './Partner';
import type { PaymentFrequency } from './PaymentFrequency';

export type ClientContract = {
    id?: number;
    createdAt?: string;
    fileName?: string;
    fileId?: number;
    legacy?: boolean;
    contractNumber?: string;
    paymentValue?: number;
    paymentFrequency?: PaymentFrequency;
    contractor?: Partner;
}
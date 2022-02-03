/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProofOfIdentityType } from './ProofOfIdentityType';

export type ProofOfIdentityDto = {
    id?: number;
    createdAt?: string;
    type?: ProofOfIdentityType;
}
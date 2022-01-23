/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProofOfIdentityType } from './ProofOfIdentityType';

export type ProofOfIdentity = {
    id?: number;
    createdAt?: string;
    fileName?: string;
    fileId?: number;
    type?: ProofOfIdentityType;
}
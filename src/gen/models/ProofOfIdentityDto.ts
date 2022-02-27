/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CloudFileDto } from './CloudFileDto';
import type { ProofOfIdentityType } from './ProofOfIdentityType';

export type ProofOfIdentityDto = {
    id?: number;
    createdAt?: string;
    type?: ProofOfIdentityType;
    file?: CloudFileDto;
};
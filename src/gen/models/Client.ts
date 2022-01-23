/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientContract } from './ClientContract';
import type { Country } from './Country';
import type { Employee } from './Employee';
import type { Gender } from './Gender';
import type { GenericPerson } from './GenericPerson';
import type { MaritalStatus } from './MaritalStatus';
import type { ProofOfIdentity } from './ProofOfIdentity';

export type Client = {
    id?: number;
    createdAt?: string;
    gender?: Gender;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    mobile?: string;
    title?: string;
    academicDegree?: string;
    birthday?: string;
    birthPlace?: string;
    nationality?: Country;
    socialInsuranceInstitution?: string;
    occupation?: string;
    country?: Country;
    zipCode?: string;
    city?: string;
    address?: string;
    supervisor?: Employee;
    deleted?: boolean;
    militaryServiceDone?: boolean;
    smoker?: boolean;
    pets?: boolean;
    petsRemarks?: string;
    maritalStatus?: MaritalStatus;
    partner?: GenericPerson;
    children?: Array<GenericPerson>;
    clientContracts?: Array<ClientContract>;
    proofOfIdentities?: Array<ProofOfIdentity>;
    bank?: string;
    iban?: string;
    bic?: string;
}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientContractDto } from './ClientContractDto';
import type { ClientDocumentDto } from './ClientDocumentDto';
import type { Country } from './Country';
import type { Gender } from './Gender';
import type { GenericPersonDto } from './GenericPersonDto';
import type { MaritalStatus } from './MaritalStatus';
import type { ProofOfIdentityDto } from './ProofOfIdentityDto';

export type ClientDto = {
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
    supervisor?: string;
    deleted?: boolean;
    militaryServiceDone?: boolean;
    smoker?: boolean;
    pets?: boolean;
    petsRemarks?: string;
    maritalStatus?: MaritalStatus;
    homeRemarks?: string;
    bank?: string;
    iban?: string;
    bic?: string;
    partner?: GenericPersonDto;
    children?: Array<GenericPersonDto>;
    contracts?: Array<ClientContractDto>;
    documents?: Array<ClientDocumentDto>;
    proofOfIdentities?: Array<ProofOfIdentityDto>;
};
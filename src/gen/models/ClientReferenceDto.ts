/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { Gender } from './Gender';

export type ClientReferenceDto = {
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
};
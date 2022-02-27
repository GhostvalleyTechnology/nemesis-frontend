/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientContractDto } from './ClientContractDto';
import type { GenericPersonDto } from './GenericPersonDto';

export type ClientContractWithPersonalInformationDto = {
    contractDto?: ClientContractDto;
    clientDto?: GenericPersonDto;
};
import l, {Localisation, format} from '../../localisation'
import { ClientDto, ClientContractDto } from "../../gen";
import { ExperienceType } from "./ExperienceType";
import { WealthBuildingType } from './WealthBuildingType';
import { CarType } from '../client/CarType';

export type NeedsAssessmentType = {
  client: ClientDto;
  insurances: InsurancesType;
  wealthBuilding: WealthBuildingType;
  cars: CarType[];
  experiences: ExperienceType[];
  powerOfAttorny: LegalType;
  legalNotice: LegalType;
}

let $l: Localisation;
l.subscribe(v => $l = v);

type InsurancesType = {
  accidentInsurance: InsuranceType & ClientContractDto;
  disabilityInsurance: InsuranceType & ClientContractDto;
  homeInsurance: InsuranceType & ClientContractDto & HomeInsuranceType;
  legalProtectionInsurance: InsuranceType & ClientContractDto;
  deathInsurance: InsuranceType & ClientContractDto;
  retirementInsurance: InsuranceType & ClientContractDto;
  illnessInsurance: InsuranceType & ClientContractDto;
  careRemarks: string;
}

export type HomeInsuranceType = {
  homeOwnership: boolean;
  home: HomeOwnershipType;
  householdArea?: string;
  petsRemarks?: string;
  householdInsurance: boolean;
  liabilityInsurance: boolean;
}

type HomeOwnershipType = {
  builtArea: string;
  floors: string;
  roofType: string;
  cellar: boolean;
  pool: boolean;
  photovoltaic: boolean;
  photovoltaicRemarks: string;
  specialAssets: string;
}

export type InsuranceType = {
  clientHas: boolean;
}

type LegalType = {
  place?: string;
  date?: string;
  signature?: string;
}

const newNeedsAssessment: NeedsAssessmentType = {
  client: {
    partner: {},
    pets: false,
    smoker: false,
    militaryServiceDone: false
  },
  insurances: {
    accidentInsurance: {
      clientHas: false,
      contractor: {},
    },
    disabilityInsurance: {
      clientHas: false,
      contractor: {},
    },
    homeInsurance: {
      clientHas: false,
      contractor: {},
      homeOwnership: false,
      home: {
        builtArea: '',
        floors: '',
        roofType: '',
        cellar: false,
        pool: false,
        photovoltaic: false,
        photovoltaicRemarks: '',
        specialAssets: '',
      },
      householdInsurance: false,
      liabilityInsurance: false,
    },
    legalProtectionInsurance: {
      clientHas: false,
      contractor: {},
    },
    deathInsurance: {
      clientHas: false,
      contractor: {},
    },
    illnessInsurance: {
      clientHas: false,
      contractor: {},
    },
    retirementInsurance: {
      clientHas: false,
      contractor: {},
    },
    careRemarks: '',
  },
  wealthBuilding: {
    retirementProvision: { desired: false },
    saveBig: { desired: false },
    saveEducation: { desired: false },
    otherInvestmentGoal: { desired: false },
    alreadyInvested: { desired: false},
    paymentOnce: { desired: false },
    paymentMonthly: { desired: false },
    paymentYearly: { desired: false },
  },
  cars: [],
  experiences: [
    {name: $l.needsAssessment.experiences.lifeInsurance},
    {name: $l.needsAssessment.experiences.investmentFonds},
    {name: $l.needsAssessment.experiences.bonds},
    {name: $l.needsAssessment.experiences.shareHolding},
    {name: $l.needsAssessment.experiences.options},
    {name: $l.needsAssessment.experiences.financing},
    {name: $l.needsAssessment.experiences.guarantees},
    {name: $l.needsAssessment.experiences.properties},
    {name: $l.needsAssessment.experiences.certificates}
  ],
  powerOfAttorny: {
    date: today()
  },
  legalNotice: {
    date: today()
  }
}

function today(): string {
  let yourDate = new Date();
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - (offset*60*1000));
  return yourDate.toISOString().split('T')[0];
}

export default newNeedsAssessment;
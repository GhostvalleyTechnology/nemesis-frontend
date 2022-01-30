import l, {Localisation, format} from '../../localisation'
import { Client } from "../../gen";
import { ExperienceType } from "./ExperienceType";

export type NeedsAssessmentType = {
  client: Client;
  experiences: ExperienceType[];
  powerOfAttorny: LegalType;
  legalNotice: LegalType;
}

let $l: Localisation;
l.subscribe(v => $l = v);

type LegalType = {
  place?: string;
  date?: string;
  signature?: string;
}

const newNeedsAssessment: NeedsAssessmentType = {
  client: {
    partner: {}
  },
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

  },
  legalNotice: {
    
  }
}
export default newNeedsAssessment;
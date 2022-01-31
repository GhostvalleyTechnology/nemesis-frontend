export type SocialInsuranceInstitutionData = {
  name: string;
  code: string;
}

export function mapCodeToSocialInsuranceInstitutionName(code?: string): string {
  if(!code) {
    return null;
  }
  let data = getSocialInsuranceInstitutionData();
  let maybe = data.find(item => code == item.code);
  if(maybe) {
    return maybe.name;
  }
  return null;
}

export function getSocialInsuranceInstitutionData(): SocialInsuranceInstitutionData[] {
return[
 {
   "name": "Österreichische Gesundheitskasse",
   "code": "ÖGK"
 },
 {
   "name": "Versicherungsanstalt öffentlicher Bediensteter, Eisenbahn und Bergbau",
   "code": "BVAEB"
 },
 {
   "name": "Sozialversicherung der Selbständigen",
   "code": "SVS"
 },
 {
   "name": "Pensionsversicherungsanstalt",
   "code": "PVA"
 },
 {
   "name": "Allgemeine Unfallversicherungsanstalt",
   "code": "AUVA"
 }
]}
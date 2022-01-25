export type SocialInsuranceInstitutionData = {
  name: string;
  code: string;
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
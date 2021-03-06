import { Country } from './gen';

export type CountryData = {
  name: string;
  code: string;
}

export function mapCountryToName(country?: Country): string {
  if(!country) {
    return null;
  }
  let data = getCountryData();
  let maybe = data.find(item => country == Country[item.code]);
  if(maybe) {
    return maybe.name;
  }
  return null;
}

export function getCountryData(): CountryData[] {
return [
 {
   "name": "Afghanistan",
   "code": "AF"
 },
 {
   "name": "Ägypten",
   "code": "EG"
 },
 {
   "name": "Aland",
   "code": "AX"
 },
 {
   "name": "Albanien",
   "code": "AL"
 },
 {
   "name": "Algerien",
   "code": "DZ"
 },
 {
   "name": "Andorra",
   "code": "AD"
 },
 {
   "name": "Angola",
   "code": "AO"
 },
 {
   "name": "Anguilla",
   "code": "AI"
 },
 {
   "name": "Antarktis",
   "code": "AQ"
 },
 {
   "name": "Antigua und Barbuda",
   "code": "AG"
 },
 {
   "name": "Äquatorial Guinea",
   "code": "GQ"
 },
 {
   "name": "Argentinien",
   "code": "AR"
 },
 {
   "name": "Armenien",
   "code": "AM"
 },
 {
   "name": "Aruba",
   "code": "AW"
 },
 {
   "name": "Aserbeidschan",
   "code": "AZ"
 },
 {
   "name": "Äthiopien",
   "code": "ET"
 },
 {
   "name": "Australien",
   "code": "AU"
 },
 {
   "name": "Bahamas",
   "code": "BS"
 },
 {
   "name": "Bahrain",
   "code": "BH"
 },
 {
   "name": "Bangladesch",
   "code": "BD"
 },
 {
   "name": "Barbados",
   "code": "BB"
 },
 {
   "name": "Belarus (Weissrussland)",
   "code": "BY"
 },
 {
   "name": "Belgien",
   "code": "BE"
 },
 {
   "name": "Belize",
   "code": "BZ"
 },
 {
   "name": "Benin",
   "code": "BJ"
 },
 {
   "name": "Bermuda",
   "code": "BM"
 },
 {
   "name": "Bhutan",
   "code": "BT"
 },
 {
   "name": "Bolivien",
   "code": "BO"
 },
 {
   "name": "Bonaire, St. Eustatius und Saba",
   "code": "BQ"
 },
 {
   "name": "Bosnien und Herzegowina",
   "code": "BA"
 },
 {
   "name": "Botsuana",
   "code": "BW"
 },
 {
   "name": "Bouvetinsel",
   "code": "BV"
 },
 {
   "name": "Brasilien",
   "code": "BR"
 },
 {
   "name": "Brit.Terr.Im Indischen Ozean",
   "code": "IO"
 },
 {
   "name": "Brunei Darussalam",
   "code": "BN"
 },
 {
   "name": "Bulgarien",
   "code": "BG"
 },
 {
   "name": "Burkina Faso",
   "code": "BF"
 },
 {
   "name": "Burundi",
   "code": "BI"
 },
 {
   "name": "Chile",
   "code": "CL"
 },
 {
   "name": "China",
   "code": "CN"
 },
 {
   "name": "Cook-Inseln Neuseel.Verwaltung",
   "code": "CK"
 },
 {
   "name": "Costa Rica",
   "code": "CR"
 },
 {
   "name": "Cote D'Ivoire (Elfenbeinkueste)",
   "code": "CI"
 },
 {
   "name": "Curaçao",
   "code": "CW"
 },
 {
   "name": "Dänemark",
   "code": "DK"
 },
 {
   "name": "Deutschland",
   "code": "DE"
 },
 {
   "name": "Dominica",
   "code": "DM"
 },
 {
   "name": "Dominikanische Republik",
   "code": "DO"
 },
 {
   "name": "Dschibuti",
   "code": "DJ"
 },
 {
   "name": "Ecuador",
   "code": "EC"
 },
 {
   "name": "El Salvador",
   "code": "SV"
 },
 {
   "name": "Eritrea",
   "code": "ER"
 },
 {
   "name": "Estland",
   "code": "EE"
 },
 {
   "name": "Eswatini",
   "code": "SZ"
 },
 {
   "name": "Faeroeer Inseln Dän.Verwaltung",
   "code": "FO"
 },
 {
   "name": "Falklandinseln (Malvinen)",
   "code": "FK"
 },
 {
   "name": "Fidschi",
   "code": "FJ"
 },
 {
   "name": "Finnland",
   "code": "FI"
 },
 {
   "name": "Frankreich",
   "code": "FR"
 },
 {
   "name": "Franz. Südgebiete",
   "code": "TF"
 },
 {
   "name": "Französisch Guayana",
   "code": "GF"
 },
 {
   "name": "Französisch Polynesien",
   "code": "PF"
 },
 {
   "name": "Gabun",
   "code": "GA"
 },
 {
   "name": "Gambia",
   "code": "GM"
 },
 {
   "name": "Georgien",
   "code": "GE"
 },
 {
   "name": "Ghana",
   "code": "GH"
 },
 {
   "name": "Gibraltar",
   "code": "GI"
 },
 {
   "name": "Grenada",
   "code": "GD"
 },
 {
   "name": "Griechenland",
   "code": "GR"
 },
 {
   "name": "Grönland (Dän.Verwaltung)",
   "code": "GL"
 },
 {
   "name": "Großbritannien",
   "code": "GB"
 },
 {
   "name": "Guadeloupe (Franz.Verwaltung)",
   "code": "GP"
 },
 {
   "name": "Guam (US-Verwaltung)",
   "code": "GU"
 },
 {
   "name": "Guatemala",
   "code": "GT"
 },
 {
   "name": "Guernsey Insel",
   "code": "GG"
 },
 {
   "name": "Guinea",
   "code": "GN"
 },
 {
   "name": "Guinea-Bissau",
   "code": "GW"
 },
 {
   "name": "Guyana",
   "code": "GY"
 },
 {
   "name": "Haiti",
   "code": "HT"
 },
 {
   "name": "Heard und Mc Donald Inseln (unter Austr.Verw.)",
   "code": "HM"
 },
 {
   "name": "Honduras",
   "code": "HN"
 },
 {
   "name": "Hongkong",
   "code": "HK"
 },
 {
   "name": "Indien",
   "code": "IN"
 },
 {
   "name": "Indonesien",
   "code": "ID"
 },
 {
   "name": "Irak",
   "code": "IQ"
 },
 {
   "name": "Iran",
   "code": "IR"
 },
 {
   "name": "Irland",
   "code": "IE"
 },
 {
   "name": "Island",
   "code": "IS"
 },
 {
   "name": "Israel",
   "code": "IL"
 },
 {
   "name": "Italien",
   "code": "IT"
 },
 {
   "name": "Jamaika",
   "code": "JM"
 },
 {
   "name": "Japan",
   "code": "JP"
 },
 {
   "name": "Jemen",
   "code": "YE"
 },
 {
   "name": "Jersey Insel",
   "code": "JE"
 },
 {
   "name": "Jordanien",
   "code": "JO"
 },
 {
   "name": "Jungfern-Inseln (Britisch)",
   "code": "VG"
 },
 {
   "name": "Jungfern-Inseln (USA)",
   "code": "VI"
 },
 {
   "name": "Kaimaninseln",
   "code": "KY"
 },
 {
   "name": "Kambodscha",
   "code": "KH"
 },
 {
   "name": "Kamerun",
   "code": "CM"
 },
 {
   "name": "Kanada",
   "code": "CA"
 },
 {
   "name": "Kap Verde",
   "code": "CV"
 },
 {
   "name": "Kasachstan",
   "code": "KZ"
 },
 {
   "name": "Katar",
   "code": "QA"
 },
 {
   "name": "Kenia",
   "code": "KE"
 },
 {
   "name": "Kirgisistan",
   "code": "KG"
 },
 {
   "name": "Kiribati",
   "code": "KI"
 },
 {
   "name": "Kokosinseln (Keeling)",
   "code": "CC"
 },
 {
   "name": "Kolumbien",
   "code": "CO"
 },
 {
   "name": "Komoren",
   "code": "KM"
 },
 {
   "name": "Kongo",
   "code": "CG"
 },
 {
   "name": "Kongo, Demokratische Republik",
   "code": "CD"
 },
 {
   "name": "Korea, Demokratische Volksrepublik",
   "code": "KP"
 },
 {
   "name": "Korea, Republik",
   "code": "KR"
 },
 {
   "name": "Kosovo",
   "code": "XK"
 },
 {
   "name": "Kroatien",
   "code": "HR"
 },
 {
   "name": "Kuba",
   "code": "CU"
 },
 {
   "name": "Kuwait",
   "code": "KW"
 },
 {
   "name": "Laos",
   "code": "LA"
 },
 {
   "name": "Lesotho",
   "code": "LS"
 },
 {
   "name": "Lettland",
   "code": "LV"
 },
 {
   "name": "Libanon",
   "code": "LB"
 },
 {
   "name": "Liberien",
   "code": "LR"
 },
 {
   "name": "Libysch-Arabische Dschamahirija",
   "code": "LY"
 },
 {
   "name": "Liechtenstein",
   "code": "LI"
 },
 {
   "name": "Litauen",
   "code": "LT"
 },
 {
   "name": "Luxemburg",
   "code": "LU"
 },
 {
   "name": "Macao",
   "code": "MO"
 },
 {
   "name": "Madagaskar",
   "code": "MG"
 },
 {
   "name": "Malawi",
   "code": "MW"
 },
 {
   "name": "Malaysia",
   "code": "MY"
 },
 {
   "name": "Malediven",
   "code": "MV"
 },
 {
   "name": "Mali",
   "code": "ML"
 },
 {
   "name": "Malta",
   "code": "MT"
 },
 {
   "name": "Man, Insel",
   "code": "IM"
 },
 {
   "name": "Marianen, Nördliche",
   "code": "MP"
 },
 {
   "name": "Marokko",
   "code": "MA"
 },
 {
   "name": "Marshall Inseln",
   "code": "MH"
 },
 {
   "name": "Martinique Franz.Verwaltung",
   "code": "MQ"
 },
 {
   "name": "Mauretanien",
   "code": "MR"
 },
 {
   "name": "Mauritius",
   "code": "MU"
 },
 {
   "name": "Mayotte",
   "code": "YT"
 },
 {
   "name": "Mexiko",
   "code": "MX"
 },
 {
   "name": "Mikronesien",
   "code": "FM"
 },
 {
   "name": "Moldau, Republik",
   "code": "MD"
 },
 {
   "name": "Monaco",
   "code": "MC"
 },
 {
   "name": "Mongolei",
   "code": "MN"
 },
 {
   "name": "Montenegro",
   "code": "ME"
 },
 {
   "name": "Montserrat (GB-Verwaltung)",
   "code": "MS"
 },
 {
   "name": "Mosambik",
   "code": "MZ"
 },
 {
   "name": "Myanmar",
   "code": "MM"
 },
 {
   "name": "Namibia",
   "code": "NA"
 },
 {
   "name": "Nauru",
   "code": "NR"
 },
 {
   "name": "Nepal",
   "code": "NP"
 },
 {
   "name": "Neukaledonien",
   "code": "NC"
 },
 {
   "name": "Neuseeland",
   "code": "NZ"
 },
 {
   "name": "Nicaragua",
   "code": "NI"
 },
 {
   "name": "Niederlande",
   "code": "NL"
 },
 {
   "name": "Niger",
   "code": "NE"
 },
 {
   "name": "Nigeria",
   "code": "NG"
 },
 {
   "name": "Niue (Neuseel.Verwaltung)",
   "code": "NU"
 },
 {
   "name": "Norfolkinsel",
   "code": "NF"
 },
 {
   "name": "Norwegen",
   "code": "NO"
 },
 {
   "name": "Oman",
   "code": "OM"
 },
 {
   "name": "Österreich",
   "code": "AT"
 },
 {
   "name": "Pakistan",
   "code": "PK"
 },
 {
   "name": "Palästina",
   "code": "PS"
 },
 {
   "name": "Palau",
   "code": "PW"
 },
 {
   "name": "Panama",
   "code": "PA"
 },
 {
   "name": "Papua Neuguinea",
   "code": "PG"
 },
 {
   "name": "Paraguay",
   "code": "PY"
 },
 {
   "name": "Peru",
   "code": "PE"
 },
 {
   "name": "Philippinen",
   "code": "PH"
 },
 {
   "name": "Pitcairninsel",
   "code": "PN"
 },
 {
   "name": "Polen",
   "code": "PL"
 },
 {
   "name": "Portugal",
   "code": "PT"
 },
 {
   "name": "Puerto Rico (US-Verwaltung)",
   "code": "PR"
 },
 {
   "name": "Republik Nordmazedonien",
   "code": "MK"
 },
 {
   "name": "Reunion",
   "code": "RE"
 },
 {
   "name": "Ruanda",
   "code": "RW"
 },
 {
   "name": "Rumänien",
   "code": "RO"
 },
 {
   "name": "Russische Föderation",
   "code": "RU"
 },
 {
   "name": "Saint Barthélemy (Franz.Verwaltung)",
   "code": "BL"
 },
 {
   "name": "Saint Martin (Franz. Verwaltung)",
   "code": "MF"
 },
 {
   "name": "Salomonen",
   "code": "SB"
 },
 {
   "name": "Sambia",
   "code": "ZM"
 },
 {
   "name": "Samoa-Amerikanisch (US-Verwaltung)",
   "code": "AS"
 },
 {
   "name": "Samoa-West",
   "code": "WS"
 },
 {
   "name": "San Marino",
   "code": "SM"
 },
 {
   "name": "Sao Tome und Principe",
   "code": "ST"
 },
 {
   "name": "Saudi-Arabien",
   "code": "SA"
 },
 {
   "name": "Schweden",
   "code": "SE"
 },
 {
   "name": "Schweiz",
   "code": "CH"
 },
 {
   "name": "Senegal",
   "code": "SN"
 },
 {
   "name": "Serbien (exkl. Kosovo)",
   "code": "RS"
 },
 {
   "name": "Seychellen",
   "code": "SC"
 },
 {
   "name": "Sierra Leone",
   "code": "SL"
 },
 {
   "name": "Simbabwe",
   "code": "ZW"
 },
 {
   "name": "Singapur",
   "code": "SG"
 },
 {
   "name": "Slowakei",
   "code": "SK"
 },
 {
   "name": "Slowenien",
   "code": "SI"
 },
 {
   "name": "Somalia",
   "code": "SO"
 },
 {
   "name": "Spanien",
   "code": "ES"
 },
 {
   "name": "Spitzb. und Jan Mayen Insel (Norw.Verw.)",
   "code": "SJ"
 },
 {
   "name": "Sri Lanka",
   "code": "LK"
 },
 {
   "name": "St. Martin",
   "code": "SX"
 },
 {
   "name": "St. Vincent und die Grenadinen",
   "code": "VC"
 },
 {
   "name": "St.Helena",
   "code": "SH"
 },
 {
   "name": "St.Kitts und Nevis",
   "code": "KN"
 },
 {
   "name": "St.Lucia",
   "code": "LC"
 },
 {
   "name": "St.Pierre und Miquelon",
   "code": "PM"
 },
 {
   "name": "Südafrika",
   "code": "ZA"
 },
 {
   "name": "Sudan",
   "code": "SD"
 },
 {
   "name": "Südgeorgien und Süd-Sandwich-Insel",
   "code": "GS"
 },
 {
   "name": "Südsudan",
   "code": "SS"
 },
 {
   "name": "Suriname",
   "code": "SR"
 },
 {
   "name": "Syrien",
   "code": "SY"
 },
 {
   "name": "Tadschikistan",
   "code": "TJ"
 },
 {
   "name": "Taiwan",
   "code": "TW"
 },
 {
   "name": "Tansania, Vereinigte Republik",
   "code": "TZ"
 },
 {
   "name": "Thailand",
   "code": "TH"
 },
 {
   "name": "Timor-Leste",
   "code": "TL"
 },
 {
   "name": "Togo",
   "code": "TG"
 },
 {
   "name": "Tokelau (Neuseel.Verwaltung)",
   "code": "TK"
 },
 {
   "name": "Tonga",
   "code": "TO"
 },
 {
   "name": "Trinidad und Tobago",
   "code": "TT"
 },
 {
   "name": "Tschad",
   "code": "TD"
 },
 {
   "name": "Tschechien",
   "code": "CZ"
 },
 {
   "name": "Tunesien",
   "code": "TN"
 },
 {
   "name": "Türkei",
   "code": "TR"
 },
 {
   "name": "Turkmenistan",
   "code": "TM"
 },
 {
   "name": "Turks- und Caicosinseln",
   "code": "TC"
 },
 {
   "name": "Tuvalu",
   "code": "TV"
 },
 {
   "name": "Uganda",
   "code": "UG"
 },
 {
   "name": "Ukraine",
   "code": "UA"
 },
 {
   "name": "Ungarn",
   "code": "HU"
 },
 {
   "name": "Uruguay",
   "code": "UY"
 },
 {
   "name": "USA - Sonstige Kleine Inseln",
   "code": "UM"
 },
 {
   "name": "USA - Vereinigte Staaten",
   "code": "US"
 },
 {
   "name": "Usbekistan",
   "code": "UZ"
 },
 {
   "name": "Vanuatu",
   "code": "VU"
 },
 {
   "name": "Vatikan",
   "code": "VA"
 },
 {
   "name": "Venezuela",
   "code": "VE"
 },
 {
   "name": "Vereinigte Arabische Emirate",
   "code": "AE"
 },
 {
   "name": "Vietnam",
   "code": "VN"
 },
 {
   "name": "Wallis und Futuna",
   "code": "WF"
 },
 {
   "name": "Weihnachtsinsel (Austr.Verwaltung)",
   "code": "CX"
 },
 {
   "name": "Westsahara Eigenst.Staat",
   "code": "EH"
 },
 {
   "name": "Zentralafrikanische Republik",
   "code": "CF"
 },
 {
   "name": "Zypern",
   "code": "CY"
 }
];
}
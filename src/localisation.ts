import { writable } from 'svelte/store';

export function format(localisation: string, ...args: string[]): string {
    return localisation.replace(/{(\d+)}/g, (_, index) => args[index] || '');
}

export type Localisation = {
    slogan: string;
    menu: Menu;
    personal: Personal;
    contract: Contract;
    needsAssessment: NeedsAssessment;
    home: Home;
    remarks: string;
    payment: GeneralPayment;
    search: string;
    yes: string;
    no: string;
    save: string;
    add: string;
    createdAt: string;
    file: string;
}

type Contract = {
    newContractTitle: string;
    contractNumber: string;
    serviceType: string;
    legacy: string;

}

type GeneralPayment = {
    euroTextfieldLabel: string;
    paymentFrequency: string;
    contractor: string;
    monthly: string;
    quarterly: string;
    yearly: string;
}

type Menu = {
    home: string;
    clients: string;
    templates: string;
    partner: string;
    contracts: string;
    notes: string;
    admin_mode: string;
    employees: string;
    logout: string;
    footer: string;
}

type Home = {
    greeting: string;
}

type NeedsAssessment = {
    title: string;
    subtitles: NeedsAssessmentSubtitles;
    insurances: NeedsAssessmentInsurances;
    experiences: NeedsAssessmentExperiences;
    provisions: NeedsAssessmentProvisions;
    wealthBuilding: NeedsAssessmentWealthBuilding;
    signing: NeedsAssessmentLegal;
    finishButton: string;
}

type NeedsAssessmentLegal = {
    date: string;
    place: string;
    powerOfAttornyTitle: string;
    powerOfAttornyText: string;
    noticeTitle: string;
    noticeText: string;
}

type NeedsAssessmentProvisions = {
    death: string;
    retirement: string;
    wealthBuilding: string;
    illness: string;
    care: string;
}

type NeedsAssessmentSubtitles = {
    personal: string;
    insurance: string;
    provision: string;
    experiences: string;
    legal: string;
}

type NeedsAssessmentInsurances = {
    chartTitle: string;
    accidentInsurance: NeedsAssessmentInsurance;
    disabilityInsurance: NeedsAssessmentInsurance;
    homeInsurance: NeedsAssessmentInsurance & NeedsAssessmentHomeInsurance;
    legalProtectionInsurance: NeedsAssessmentInsurance;
}

type NeedsAssessmentHomeInsurance = {
    homeOwnershipLabel: string;
    householdInsuranceLabel: string;
    liabilityInsuranceLabel: string; 
}

type NeedsAssessmentInsurance = {
    name: string;
    helpSubtitle: string;
    helpText: string;
}

type NeedsAssessmentExperiences = {
    lifeInsurance: string;
    investmentFonds: string;
    bonds: string;
    shareHolding: string;
    options: string;
    financing: string;
    guarantees: string;
    properties: string;
    certificates: string;
    yesExperience: string;
    noExperience: string;
    since: string;
}

type NeedsAssessmentWealthBuilding = {
    retirementProvision: string;
    saveBig: string;
    saveEducation: string;
    otherInvestmentGoal: string;
    alreadyInvested: string;
    plannedInvestmentPeriod: string;
    investmentPeriodOptions: InvestmentPeriodOptions;
    plannedMethodOfPayment: string;
    paymentOnce: string;
    paymentMonthly: string;
    paymentYearly: string;
    riskTolerance: string;
    veryHigh: RiskLevel;
    high: RiskLevel;
    medium: RiskLevel;
    low: RiskLevel;
}

type InvestmentPeriodOptions = {
    upToFiveYears: string;
    fiveToTwentyYears: string;
    moreThanTwentyYears: string;
}

type RiskLevel = {
    name: string;
    description: string;
}

type Personal = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    country: string;
    zipCode: string;
    city: string;
    phone: string;
    mobile: string;
    gender: Gender;
    birthday: string;
    nationality: string;
    birthPlace: string;
    maritalStatus: MaritalStatus;
    partnerLabel: string;
    occupation: string;
    socialInsuranceInstitution: string;
    title: string;
    degree: string;
    militaryServiceDone: string;
    smoker: string;
    pets: string;
    petsRemarks: string;
    childrenLabel: string;
    addChild: string;
    car: CarType;
    home: HomeType;
}

type HomeType = {
    area: string;
    builtArea: string;
    floors: string;
    roofType: string;
    cellar: string;
    pool: string;
    photovoltaic: string;
    photovoltaicRemarks: string;
    specialAssets: string;
}

type CarType = {
    label: string;
    addCar: string,
    name: string;
    contractor: string; // Gesellschaft
    contractNumber: string; // Polizzen-Nr.
    bonusLevel: string; // Bonus / Malus Stufe
    mainDue: string; // Hauptfälligkeit
    make: string; // KFZ-Marke
    power: string; // KW / PS / ccm
    driveType: string; // Antriebsart
    licensePlate: string; // Kennzeichen
    constructionYear: string; // Baujahr
    insuranceType: string; // Kaskoart
    originalPrice: string; // Neupreis inkl. Sonderausstattung
    deductible: string; // Selbstbehalt
    bonus: string; // Prämie
    paymentType: string; // Zahlungsweise
}

type Gender = {
    label: string;
    male: string;
    female: string;
    divers: string;
}

type MaritalStatus = {
    label: string;
    single: string;
    married: string;
    divorced: string;
}

export const en: Localisation = {
    slogan: 'Kopf frei bei Finanzfragen',
    menu: {
        home: 'Home',
        clients: 'Clients',
        templates: 'Templates',
        partner: 'Partner',
        contracts: 'Contracts',
        notes: 'Notes',
        admin_mode: 'Admin Mode',
        employees: 'Employees',
        logout: 'Logout',
        footer: 'created with ♡ by quellkunst.com'
    },
    personal: {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'E-mail address',
        address: 'Address',
        country: 'Country',
        zipCode: 'Zip code',
        city: 'City',
        phone: 'Phone number',
        mobile: 'Mobile number',
        gender: {
            label: 'Gender',
            male: 'Male',
            female: 'Female',
            divers: 'Divers'
        },
        birthday: 'Birthday',
        nationality: 'Nationality',
        birthPlace: 'Place of birth',
        partnerLabel: 'Partner',
        maritalStatus: {
            label: 'Marital status',
            single: 'Single',
            married: 'Married',
            divorced: 'Divorced',
        },
        occupation: 'Occupation',
        socialInsuranceInstitution: 'Social insurance institution',
        title: 'Title',
        degree: 'Degree',
        militaryServiceDone: 'Conscripted',
        smoker: 'Smoker',
        pets: 'Pets',
        petsRemarks: 'Remarks regarding your pets',
        childrenLabel: 'Children',
        addChild: 'Add child',
        car: {
            label: 'Cars',
            addCar: 'Add car',
            name: 'Name',
            contractor: 'Contractor',
            contractNumber: 'Contract-No.',
            bonusLevel: 'Bonus / malus level',
            mainDue: 'Main due',
            make: 'Make',
            power: 'Power',
            driveType: 'Drive type',
            licensePlate: 'License plate',
            constructionYear: 'Construction year',
            insuranceType: 'Insurance type',
            originalPrice: 'Original price incl. extras',
            deductible: 'Deductible',
            bonus: 'Bonus',
            paymentType: 'Payment type',
        },
        home: {
            area: 'Area',
            builtArea: 'Built area',
            floors: 'Floors',
            roofType: 'Roof type',
            cellar: 'Cellar',
            pool: 'Pool',
            photovoltaic: 'Photovoltaic',
            photovoltaicRemarks: 'Area or module number',
            specialAssets: 'Special assets',
        }
    },
    needsAssessment: {
        title: 'Needs Assessment',
        subtitles: {
            personal: 'Personal',
            insurance: 'Insurances',
            provision: 'Provisions',
            experiences: 'Experiences',
            legal: 'Legal'
        },
        insurances: {
            chartTitle: 'Cover',
            accidentInsurance: {
                name: 'Accident Insurance',
                helpSubtitle: 'Max Muster stumbles over the stairs!',
                helpText: 'In the fall he is seriously injured and damages the glazing of the stairwell!'
            },
            disabilityInsurance: {
                name: 'Disability Insurance',
                helpSubtitle: 'Max Muster stumbles over the stairs!',
                helpText: 'Because of the injuries Max must be flown to the hospital! After some time it turns out that Max can no longer practice his profession due to his injuries!'
            },
            homeInsurance: {
                name: 'Home Insurance',
                helpSubtitle: 'Max Muster stumbles over the stairs!',
                helpText: 'In addition, Max gets a hefty bill from the building owner\'s, because of the damaged window!',
                homeOwnershipLabel: 'Home ownership',
                householdInsuranceLabel: 'Household insurance',
                liabilityInsuranceLabel: 'Liability insurance'
            },
            legalProtectionInsurance: {
                name: 'Legal Protection Insurance',
                helpSubtitle: 'Max Muster stumbles over the stairs!',
                helpText: 'Max does not want to let this sit on himself, and have it checked by a lawyer.'
            }
        },
        provisions: {
            death: 'Endowment insurance',
            retirement: 'Retirement plan',
            wealthBuilding: 'Wealth building',
            illness: 'Illness',
            care: 'Care'
        },
        experiences: {
            lifeInsurance: 'Life insurance',
            investmentFonds: 'Investment fonds',
            bonds: 'Bonds',
            shareHolding: 'Share holding',
            options: 'Options / Futures / Hedgefonds',
            financing: 'Financing',
            guarantees: 'Guarantee bonds',
            properties: 'Properties / Propertyfonds/-shares',
            certificates: 'Certificates',
            yesExperience: 'Yes, I do have experience',
            noExperience: 'No experience, desired anyway',
            since: 'Since'
        },
        wealthBuilding: {
            retirementProvision: 'Retirement provision',
            saveBig: 'Save for something big',
            saveEducation: 'Save for education',
            otherInvestmentGoal: 'Other investment goals',
            alreadyInvested: 'Do savings forms already exist?',
            plannedInvestmentPeriod: 'Planned investment period',
            investmentPeriodOptions: {
                upToFiveYears: 'Up to 5 years',
                fiveToTwentyYears: '5 - 20 years',
                moreThanTwentyYears: 'more than 20 years'
            },
            plannedMethodOfPayment: 'Planned method of payment',
            paymentOnce: 'once',
            paymentMonthly: 'monthly',
            paymentYearly: 'yearly',
            riskTolerance: 'Risk tolerance',
            veryHigh: {
                name: 'Very high',
                description: 'speculative investor | acceptance of very high fluctuations in value up to total loss of the capital invested'
            },
            high: {
                name: 'High',
                description: 'dynamic investor | acceptance of value fluctuations of more than 20% per year in expectation'
            },
            medium: {
                name: 'Medium',
                description: 'balanced investor | acceptance of value fluctuations of up to 20% per year in expectation'
            },
            low: {
                name: 'Low',
                description: 'conservative investor | acceptance of value fluctuations of up to 10% per year'
            },
        },
        signing: {
            date: 'Date',
            place: 'Place',
            powerOfAttornyTitle: 'Power of attorny',
            powerOfAttornyText: 'I hereby authorize LiberoLife GmbH and the persons acting on its behalf to provide information (including the retrieval of personal data within the meaning of Art 9 (1) DSGVO) and release from banking secrecy for {0}',
            noticeTitle: 'Notice',
            noticeText: 'We thank you for your willingness to disclose your personal data to us and are convinced that we can offer you an effective evaluation of this analysis as well as limited to the lines of insurance requested by the customer in the requirements assessment; further protection of interests is not desired and therefore excluded.<br/><br/>"The creation of the coverage concept was created exclusively according to the information provided by the customer. No liability is assumed for incorrect information".<br/><br/>I hereby authorize LiberoLife GmbH to use my personal data in accordance with § 62 WAG 2007 in conjunction with § 107 TKG and under the statutory data protection regulations - in particular the DSGVO. Your data will be treated as strictly confidential and will only be passed on to third parties under the legal requirements (e.g. preparation of an offer, etc.).<br/><br/>I confirm receipt of the information obligations and data protection notices and have been informed in detail about them. '
        },
        finishButton: 'Finish assessment'
    },
    home: {
        greeting: 'Hello {0}!'
    },
    remarks: 'Remarks',
    payment: {
        euroTextfieldLabel: 'Value',
        paymentFrequency: 'Payment frequency',
        contractor: 'Contractor',
        monthly: 'Monthly',
        quarterly: 'Quarterly',
        yearly: 'Yearly'
    },
    yes: 'yes',
    no: 'no',
    search: 'Search',
    save: 'Save',
    add: 'Add',
    contract: {
        newContractTitle: 'New Contract',
        contractNumber: 'Contract No.',
        serviceType: 'Service',
        legacy: 'Legacy Contract'
    },
    createdAt: 'Created at',
    file: 'File'
}

export const de: Localisation = {
    slogan: 'Kopf frei bei Finanzfragen',
    menu: {
        home: 'Start',
        clients: 'Kunden',
        templates: 'Vorlagen',
        partner: 'Partner',
        contracts: 'Verträge',
        notes: 'Notizen',
        admin_mode: 'Admin Modus',
        employees: 'Mitarbeiter',
        logout: 'Abmelden',
        footer: 'erstellt mit ♡ von quellkunst.com'
    },
    personal: {
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail Adresse',
        address: 'Adresse',
        country: 'Land',
        zipCode: 'PLZ',
        city: 'Ort',
        phone: 'Telefonnummer',
        mobile: 'Mobilnummer',
        gender: {
            label: 'Geschlecht',
            male: 'männlich',
            female: 'weiblich',
            divers: 'divers'
        },
        birthday: 'Geburtstag',
        partnerLabel: 'Partner',
        maritalStatus: {
            label: 'Familienstand',
            single: 'Ledig',
            married: 'Verheiratet',
            divorced: 'Geschieden'
        },
        nationality: 'Nationalität',
        birthPlace: 'Geburtsort',
        occupation: 'Beruf',
        socialInsuranceInstitution: 'Sozialversicherungsanstalt',
        title: 'Titel',
        degree: 'Akademischer Grad',
        militaryServiceDone: 'Wehrpflicht abgeschlossen',
        smoker: 'Raucher',
        pets: 'Haustiere',
        petsRemarks: 'Anmerkungen über die Haustiere',
        childrenLabel: 'Kinder',
        addChild: 'Kind hinzufügen',
        car: {
            label: 'Fahrzeuge',
            addCar: 'Fahrzeug hinzufügen',
            name: 'Name',
            contractor: 'Gesellschaft',
            contractNumber: 'Polizzen-Nr.',
            bonusLevel: 'Bonus / Malus Stufe',
            mainDue: 'Hauptfälligkeit',
            make: 'KFZ-Marke',
            power: 'KW / PS / ccm',
            driveType: 'Antriebsart',
            licensePlate: 'Kennzeichen',
            constructionYear: 'Baujahr',
            insuranceType: 'Kaskoart',
            originalPrice: 'Neupreis inkl. Sonderausstattung',
            deductible: 'Selbstbehalt',
            bonus: 'Prämie',
            paymentType: 'Zahlungsweise',
        },
        home: {
            area: 'Fläche',
            builtArea: 'Verbaute Fläche',
            floors: 'Stockwerke',
            roofType: 'Dachart',
            cellar: 'Keller',
            pool: 'Pool',
            photovoltaic: 'Photovoltaik',
            photovoltaicRemarks: 'Fläche oder Modulzahl',
            specialAssets: 'Besondere Sachwerte',
        }
    },
    needsAssessment: {
        title: 'Bedarfsanalyse',
        subtitles: {
            personal: 'Persönliches',
            insurance: 'Versicherungen',
            provision: 'Vorsorgen',
            experiences: 'Erfahrungen',
            legal: 'Rechtliches'
        },
        insurances: {
            chartTitle: 'Abdeckung',
            accidentInsurance: {
                name: 'Unfall',
                helpSubtitle: 'Max Muster stolpert über die Stiege!',
                helpText: 'Beim Sturz Verletzt er sich schwer und beschädigt die Verglasung des Stiegenhauses!'
            },
            disabilityInsurance: {
                name: 'Berufsunfähigkeit',
                helpSubtitle: 'Max Muster stolpert über die Stiege!',
                helpText: 'Aufgrund der Verletzungen muss Max ins Spital geflogen werden! Nach einiger Zeit stellt sich heraus, das Max aufgrund seiner Verletzungen den seinem Beruf nicht mehr ausüben kann!'
            },
            homeInsurance: {
                name: 'Eigenheim/Haushalt/Haftpflicht',
                helpSubtitle: 'Max Muster stolpert über die Stiege!',
                helpText: 'Als draufgabe bekommt Max noch eine saftige Rechnung des Gebäudebesitzter´s, aufgrund der Beschädigten Scheibe!',
                homeOwnershipLabel: 'Eigenheim',
                householdInsuranceLabel: 'Haushaltsversicherung',
                liabilityInsuranceLabel: 'Haftpflichtversicherung'
            },
            legalProtectionInsurance: {
                name: 'Rechtsschutz',
                helpSubtitle: 'Max Muster stolpert über die Stiege!',
                helpText: 'Max möchte das nicht auf sich sitzen lassen, und das von einem Rechtsanwalt Prüfen lassen'
            }
        },
        provisions: {
            death: 'Ableben',
            retirement: 'Pensionsvorsorge',
            wealthBuilding: 'Vermögensaufbau',
            illness: 'Krankenversicherung',
            care: 'Pflege'
        },
        experiences: {
            lifeInsurance: 'Lebensversicherung',
            investmentFonds: 'Investmentfonds',
            bonds: 'Anleihen',
            shareHolding: 'Aktien',
            options: 'Optionen/Futures/Hedgefonds',
            financing: 'Finanzierungen',
            guarantees: 'Garantiefonds',
            properties: 'Immobilien/Immobilienfonds/-aktien',
            certificates: 'Zertifikate',
            yesExperience: 'bereits Erfahrung',
            noExperience: 'keine Erfahrung trotzdem gewünscht',
            since: 'seit wann'
        },
        wealthBuilding: {
            retirementProvision: 'Altersvorsorge',
            saveBig: 'Sparen für größere Anschaffungen ',
            saveEducation: 'Sparen für Ausbildung Kinder/Partner ',
            otherInvestmentGoal: 'Andere Anlageziel',
            alreadyInvested: 'Bestehen bereits Sparformen?',
            plannedInvestmentPeriod: 'Geplante Anlagedauer',
            investmentPeriodOptions: {
                upToFiveYears: 'Bis 5.Jahre',
                fiveToTwentyYears: '5-20.Jahre',
                moreThanTwentyYears: 'über 20.Jahre'
            },
            plannedMethodOfPayment: 'Geplante Zahlungsweise',
            paymentOnce: 'Einmalzahlung',
            paymentMonthly: 'Monatliche Zahlung',
            paymentYearly: 'Jährliche Zahlung',
            riskTolerance: 'Risikotoleranz',
            veryHigh: {
                name: 'Sehr Hoch',
                description: 'spekulativer Anleger | Akzeptanz von sehr hohen Wertschwankungen bis zum Totalverlust des eingesetzten Kapitals.'
            },
            high: {
                name: 'Hoch',
                description: 'dynamischer Anleger | Akzeptanz von Wertschwankungen von mehr als 20% im Jahr in Erwartung.'
            },
            medium: {
                name: 'Mittel',
                description: 'ausgewogener Anleger | Akzeptanz von Wertschwankungen von bis zu 20% im Jahr in Erwartung.'
            },
            low: {
                name: 'Niedrig',
                description: 'konservativer Anleger | Akzeptanz von Wertschwankungen von bis zu 10% im Jahr.'
            },
        },
        signing: {
            date: 'Datum',
            place: 'Ort',
            powerOfAttornyTitle: 'Auskunftsvollmacht',
            powerOfAttornyText: 'Hiermit erteile ich bis auf Widerruf der LiberoLife GmbH und den in ihrem Auftrag handelnden Personen die Auskunftsvollmacht (einschließlich zur Abfrage personen- bezogener Daten im Sinne des Art 9 Abs 1 DSGVO) und Entbindung vom Bankgeheimnis für {0}',
            noticeTitle: 'Hinweise',
            noticeText: 'Wir bedanken uns für die Bereitschaft, uns Deine persönlichen Daten offen zu legen, und sind davon überzeugt, Dir dadurch eine effektive Auswertung dieser Analyse bieten zu können.<br/>Wir weisen darauf hin, dass sich im Versicherungsbereich die Interessenwahrung auf den österreichischen Markt sowie auf die vom Kunden in der Bedarfserfassung gewünschten Versicherungssparten beschränkt; eine darüber hinausgehende Interessenwahrung ist nicht gewünscht und daher ausgeschlossen.<br/><br/>„Die Erstellung des Deckungskonzeptes ist ausschließlich nach Angaben des Kunden passierenden Daten erstellt worden. Für Fehlinformationen wird keine Haftung übernommen“.<br/><br/>Hiermit bevollmächtige ich die LiberoLife GmbH, meine personenbezogenen Daten laut § 62 WAG 2007 iVm § 107 TKG sowie unter den gesetzlichen Datenschutzbestimmungen – insbesondere der DSGVO – zu verwenden. Deine Daten werden streng vertraulich behandelt und nur unter den gesetzlichen Voraussetzungen (zb Angebotserstellung etc.) an Dritte weitergegeben.<br/><br/>Ich bestätige den Erhalt der Informationspflichten und Datenschutzhinweise und wurde darüber ausführlich aufgeklärt.'
        },
        finishButton: 'Analyse abschließen'
    },
    home: {
        greeting: 'Hallo {0}!'
    },
    remarks: 'Anmerkungen',
    payment: {
        euroTextfieldLabel: 'Betrag',
        paymentFrequency: 'Frequenz',
        contractor: 'Versicherungsgesellschaft',
        monthly: 'Monatlich',
        quarterly: 'Quartalsweise',
        yearly: 'Jährlich'
    },
    yes: 'ja',
    no: 'nein',
    search: 'Suche',
    save: 'Speichern',
    add: 'Hinzufügen',
    contract: {
        newContractTitle: 'Neuer Vertrag',
        contractNumber: 'Polizzen Nr.',
        serviceType: 'Versicherungsgegenstand',
        legacy: 'Altvertrag'
    },
    createdAt: 'Erstellungsdatum',
    file: 'Datei'
}
export const l = writable(de);
export default l;
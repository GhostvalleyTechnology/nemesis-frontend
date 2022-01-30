export type CarType = {
    name?: string;
    contractor?: string; // Gesellschaft
    contractNumber?: string; // Polizzen-Nr.
    bonusLevel?: string; // Bonus / Malus Stufe
    mainDue?: string; // Hauptfälligkeit
    make?: string; // KFZ-Marke
    power?: string; // KW / PS / ccm
    driveType?: string; // Antriebsart
    licensePlate?: string; // Kennzeichen
    constructionYear?: string; // Baujahr
    insuranceType?: string; // Kaskoart
    originalPrice?: string; // Neupreis inkl. Sonderausstattung
    deductible?: string; // Selbstbehalt
    bonus?: string; // Prämie
    paymentType?: string; // Zahlungsweise
}
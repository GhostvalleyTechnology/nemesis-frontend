export type WealthBuildingType = {
    retirementProvision?: InvestmentGoal;
    saveBig?: InvestmentGoal;
    saveEducation?: InvestmentGoal;
    otherInvestmentGoal?: InvestmentGoal;
    alreadyInvested?: InvestmentGoal;
    plannedInvestmentPeriod?: InvestmentPeriodOptions;
    paymentOnce?: InvestmentGoal;
    paymentMonthly?: InvestmentGoal;
    paymentYearly?: InvestmentGoal;
    riskLevel?: RiskLevel;
}

export type InvestmentGoal = {
    desired?: boolean;
    remarks?: string;
}

export enum InvestmentPeriodOptions {
    upToFiveYears = 'upToFiveYears', 
    fiveToTwentyYears = 'fiveToTwentyYears', 
    moreThanTwentyYears = 'moreThanTwentyYears'
}

export enum RiskLevel {
    veryHigh = 'veryHigh', 
    high = 'high', 
    medium = 'medium', 
    low = 'low'
}
<script lang="ts">
  import l, { format } from '../../localisation';
  import KV from './PrintKeyValue.svelte';
  import KC from './PrintKeyCheckbox.svelte';
  import { NeedsAssessmentType } from "./NeedsAssessmentType";
  import { Gender, MaritalStatus, PaymentFrequency } from '../../gen';
  import { mapCountryToName } from '../../country';
  import { mapCodeToSocialInsuranceInstitutionName } from '../../socialinsuranceinstitution';
  import PrintInsurance from './PrintInsurance.svelte';
  import { InvestmentPeriodOptions, RiskLevel } from './WealthBuildingType';

  export let d: NeedsAssessmentType;
  let page: HTMLDivElement;
  export function print()
  {
    const template = `<!DOCTYPE html>
<html>
  <head>
    <title>LiberoLife</title>
    <style>
    @page {
      size: A4;
      margin: 0;
    }
    body{
      margin-left: 20mm;
      margin-bottom: 20mm;
      width: 170mm;
      height: 257mm;
      font-family: 'Calibri', 'Roboto', sans-serif;
    }
    h1 {
      font-size: 10mm;
    }
    .kv-container {
      display: grid;
      grid-template-columns: auto 1fr;
      padding: 5mm 5mm 7mm 5mm;
      row-gap: 2mm;
    }
    .key {
      color: #4f4e4e;
      border-bottom: 1px solid #eaeaea;
      width: 75mm;
    }
    .value {
      border-bottom: 1px solid #eaeaea;
    }
    .payment-key {
      padding-left: 5mm;
    }
    .payment-header {
      font-weight: bold;
    }
    section {
      padding-top: 20mm;
      break-inside: avoid;
    }
    .experiences-container {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 5mm;
    }
    img {
      width: 100mm;
    }
    .logo {
      width: 15mm;
      position: absolute;
      right: 20mm;
      top: 20mm;
    }
    </style>
  </head>
  <body>${page.innerHTML}</body>
</html>`
    var a = window.open('', '', 'height=500, width=500');
    a.document.write(template);
    a.document.close();
    // a.print();
    // a.close();
  }

  function getGender(gender?: Gender): string {
    if(!gender) {
      return null;
    }
    switch(gender) {
      case Gender.M: {
        return $l.personal.gender.male;
      }
      case Gender.F: {
        return $l.personal.gender.female;
      }
      case Gender.X: {
        return $l.personal.gender.divers;
      }
    }
  }

  function getMaritalStatus(status?: MaritalStatus): string {
    if(!status) {
      return null;
    }
    switch(status) {
      case MaritalStatus.SINGLE: {
        return $l.personal.maritalStatus.single;
      }
      case MaritalStatus.DIVORCED: {
        return $l.personal.maritalStatus.divorced;
      }
      case MaritalStatus.MARRIED: {
        return $l.personal.maritalStatus.married;
      }
    }
  }

  function getPlannedInvestmentPeriod(period?: InvestmentPeriodOptions): string {
    if(!period) {
      return null;
    }
    switch(period) {
      case InvestmentPeriodOptions.upToFiveYears: {
        return $l.needsAssessment.wealthBuilding.investmentPeriodOptions.upToFiveYears;
      }
      case InvestmentPeriodOptions.fiveToTwentyYears: {
        return $l.needsAssessment.wealthBuilding.investmentPeriodOptions.fiveToTwentyYears;
      }
      case InvestmentPeriodOptions.moreThanTwentyYears: {
        return $l.needsAssessment.wealthBuilding.investmentPeriodOptions.moreThanTwentyYears;
      }
    }
  }

  type RiskType = { name: string, desc: string }

  function getRiskTolerance(): RiskType {
    let level = d.wealthBuilding.riskLevel;
    if(!level) {
      return {name: '', desc: ''}
    }
    switch(level) {
      case RiskLevel.veryHigh: {
        return {name: $l.needsAssessment.wealthBuilding.veryHigh.name, desc: $l.needsAssessment.wealthBuilding.veryHigh.description}
      }
      case RiskLevel.high: {
        return {name: $l.needsAssessment.wealthBuilding.high.name, desc: $l.needsAssessment.wealthBuilding.high.description}
      }
      case RiskLevel.medium: {
        return {name: $l.needsAssessment.wealthBuilding.medium.name, desc: $l.needsAssessment.wealthBuilding.medium.description}
      }
      case RiskLevel.low: {
        return {name: $l.needsAssessment.wealthBuilding.low.name, desc: $l.needsAssessment.wealthBuilding.low.description}
      }
    }
  }

  $: identification = d.client.firstName + ' ' + d.client.lastName;
</script>
<div style="display: none;">


<div bind:this={page}>
  <img class="logo" src="../logo.png" alt="LiberoLife Logo" />
  <section>
  <h1>{$l.needsAssessment.title}</h1>
  <h2>{$l.needsAssessment.subtitles.personal}</h2>
  <div class="kv-container">
    <KV k={$l.personal.title} v={d.client.title}/>
    <KV k={$l.personal.firstName} bind:v={d.client.firstName}/>
    <KV k={$l.personal.lastName} v={d.client.lastName}/>
    <KV k={$l.personal.degree} v={d.client.academicDegree}/>
    <KV k={$l.personal.gender.label} v={getGender(d.client.gender)}/>
    <KV k={$l.personal.birthday} v={d.client.birthday}/>
    <KV k={$l.personal.nationality} v={mapCountryToName(d.client.nationality)}/>
    <KV k={$l.personal.birthPlace} v={d.client.birthPlace}/>  
  </div>
  <div class="kv-container">
    <KV k={$l.personal.address} v={d.client.address}/>
    <KV k={$l.personal.zipCode} v={d.client.zipCode}/>
    <KV k={$l.personal.city} v={d.client.city}/>
    <KV k={$l.personal.country} v={mapCountryToName(d.client.country)}/>
    <KV k={$l.personal.phone} v={d.client.phone}/>
    <KV k={$l.personal.mobile} v={d.client.mobile}/>
    <KV k={$l.personal.email} v={d.client.email}/>
  </div>
  <div class="kv-container">
    <KV k={$l.personal.occupation} v={d.client.occupation}/>
    <KV k={$l.personal.socialInsuranceInstitution} v={mapCodeToSocialInsuranceInstitutionName(d.client.socialInsuranceInstitution)}/>
    <KC k={$l.personal.militaryServiceDone} v={d.client.militaryServiceDone}/>
    <KC k={$l.personal.smoker} v={d.client.smoker}/>
    <KC k={$l.personal.pets} v={d.client.pets}/>
    <KV k={$l.personal.petsRemarks} check={d.client.pets} v={d.client.petsRemarks}/>
    <KV k={$l.personal.maritalStatus.label} v={getMaritalStatus(d.client.maritalStatus)}/>
  </div>
  </section>
  
  {#if d.client.maritalStatus == MaritalStatus.MARRIED}
  <section>
    <h3>{$l.personal.partnerLabel}</h3>
    <div class="partner kv-container">
      <KV k={$l.personal.title} v={d.client.partner.title}/>
      <KV k={$l.personal.firstName} v={d.client.partner.firstName}/>
      <KV k={$l.personal.lastName} v={d.client.partner.lastName}/>
      <KV k={$l.personal.degree} v={d.client.partner.academicDegree}/>
      <KV k={$l.personal.gender.label} v={getGender(d.client.partner.gender)}/>
      <KV k={$l.personal.birthday} v={d.client.partner.birthday}/>
      <KV k={$l.personal.nationality} v={mapCountryToName(d.client.partner.nationality)}/>
      <KV k={$l.personal.birthPlace} v={d.client.partner.birthPlace}/>
      <KV k={$l.personal.occupation} v={d.client.partner.occupation}/>
      <KV k={$l.personal.socialInsuranceInstitution} v={mapCodeToSocialInsuranceInstitutionName(d.client.partner.socialInsuranceInstitution)}/>
      <KV k={$l.personal.address} v={d.client.partner.address}/>
      <KV k={$l.personal.zipCode} v={d.client.partner.zipCode}/>
      <KV k={$l.personal.city} v={d.client.partner.city}/>
      <KV k={$l.personal.country} v={mapCountryToName(d.client.partner.country)}/>
      <KV k={$l.personal.phone} v={d.client.partner.phone}/>
      <KV k={$l.personal.mobile} v={d.client.partner.mobile}/>
      <KV k={$l.personal.email} v={d.client.partner.email}/>
    </div>
  </section>
  {/if}
  
  {#if d.client.children && d.client.children.length > 0}
  <section>
    <h3>{$l.personal.childrenLabel}</h3>
    {#each d.client.children as child}
    <div class="children kv-container">
      <KV k={$l.personal.firstName} v={child.firstName}/>
      <KV k={$l.personal.lastName} v={child.lastName}/>
      <KV k={$l.personal.gender.label} v={getGender(child.gender)}/>
      <KV k={$l.personal.birthday} v={child.birthday}/>
    </div>
    {/each}
  </section>
  {/if}

  <section>
    <h2>{$l.needsAssessment.subtitles.insurance}</h2>
    <div class="kv-container">
    <PrintInsurance label={$l.needsAssessment.insurances.accidentInsurance.name} insurance={d.insurances.accidentInsurance} />
    </div>
  </section>
  <section class="kv-container">
  <PrintInsurance label={$l.needsAssessment.insurances.disabilityInsurance.name} insurance={d.insurances.disabilityInsurance} />
  </section>
  <section class="kv-container">
  <PrintInsurance label={$l.needsAssessment.insurances.homeInsurance.name} insurance={d.insurances.homeInsurance}>
    <KC k={$l.needsAssessment.insurances.homeInsurance.homeOwnershipLabel} v={d.insurances.homeInsurance.homeOwnership}/>
    {#if d.insurances.homeInsurance.homeOwnership}
      <KV k={$l.personal.home.builtArea} v={d.insurances.homeInsurance.home.builtArea}/>
      <KV k={$l.personal.home.floors} v={d.insurances.homeInsurance.home.floors}/>
      <KV k={$l.personal.home.roofType} v={d.insurances.homeInsurance.home.roofType}/>
      <KC k={$l.personal.home.cellar} v={d.insurances.homeInsurance.home.cellar}/>
      <KC k={$l.personal.home.pool} v={d.insurances.homeInsurance.home.pool}/>
      <KC k={$l.personal.home.photovoltaic} v={d.insurances.homeInsurance.home.photovoltaic}/>
      <KV k={$l.personal.home.photovoltaicRemarks} check={d.insurances.homeInsurance.home.photovoltaic} v={d.insurances.homeInsurance.home.photovoltaicRemarks}/>
      <KV k={$l.personal.home.specialAssets} v={d.insurances.homeInsurance.home.specialAssets}/>
    {/if}
    <KC k={$l.needsAssessment.insurances.homeInsurance.householdInsuranceLabel} v={d.insurances.homeInsurance.householdInsurance}/>
    {#if d.insurances.homeInsurance.householdInsurance}
      <KV k={$l.personal.home.area} v={d.insurances.homeInsurance.householdArea}/>
      <KV k={$l.personal.petsRemarks} v={d.insurances.homeInsurance.petsRemarks}/>
    {/if}
    <KC k={$l.needsAssessment.insurances.homeInsurance.liabilityInsuranceLabel} v={d.insurances.homeInsurance.liabilityInsurance}/>
  </PrintInsurance>
  </section>
  <section class="kv-container">
  <PrintInsurance label={$l.needsAssessment.insurances.legalProtectionInsurance.name} insurance={d.insurances.legalProtectionInsurance} />
  </section>
  <section>
  <h2>{$l.needsAssessment.subtitles.provision}</h2>
  <div class="kv-container">
  <PrintInsurance label={$l.needsAssessment.provisions.death} insurance={d.insurances.deathInsurance} />
  </div>
  </section>
  <section class="kv-container">
  <PrintInsurance label={$l.needsAssessment.provisions.retirement} insurance={d.insurances.retirementInsurance} />
    </section>
<section class="kv-container">
  <PrintInsurance label={$l.needsAssessment.provisions.illness} insurance={d.insurances.illnessInsurance} />
</section>

  <section>
  <h3>{$l.needsAssessment.provisions.wealthBuilding}</h3>
  <div class="kv-container">
    <KC k={$l.needsAssessment.wealthBuilding.retirementProvision} v={d.wealthBuilding.retirementProvision.desired} remarks={d.wealthBuilding.retirementProvision.remarks} />
    <KC k={$l.needsAssessment.wealthBuilding.saveBig} v={d.wealthBuilding.saveBig.desired} remarks={d.wealthBuilding.saveBig.remarks} />
    <KC k={$l.needsAssessment.wealthBuilding.saveEducation} v={d.wealthBuilding.saveEducation.desired} remarks={d.wealthBuilding.saveEducation.remarks} />
    <KC k={$l.needsAssessment.wealthBuilding.otherInvestmentGoal} v={d.wealthBuilding.otherInvestmentGoal.desired} remarks={d.wealthBuilding.otherInvestmentGoal.remarks} />
    <KC k={$l.needsAssessment.wealthBuilding.alreadyInvested} v={d.wealthBuilding.alreadyInvested.desired} remarks={d.wealthBuilding.alreadyInvested.remarks} />
    <KV k={$l.needsAssessment.wealthBuilding.plannedInvestmentPeriod} v={getPlannedInvestmentPeriod(d.wealthBuilding.plannedInvestmentPeriod)} />
    <KC k={$l.needsAssessment.wealthBuilding.paymentOnce} v={d.wealthBuilding.paymentOnce.desired} remarks={d.wealthBuilding.paymentOnce.remarks} />
    <KC k={$l.needsAssessment.wealthBuilding.paymentMonthly} v={d.wealthBuilding.paymentMonthly.desired} remarks={d.wealthBuilding.paymentMonthly.remarks} />
    <KC k={$l.needsAssessment.wealthBuilding.paymentYearly} v={d.wealthBuilding.paymentYearly.desired} remarks={d.wealthBuilding.paymentYearly.remarks} />
  </div>
    <h4>{$l.needsAssessment.wealthBuilding.riskTolerance}</h4>
    <div><span>{getRiskTolerance().name}</span><span>{getRiskTolerance().desc}</span></div>
  </section>

  {#if d.cars && d.cars.length > 0}
    <h3>{$l.personal.car.label}</h3>
    {#each d.cars as car}
    <section>
      <div class="car kv-container">
        <KV k={$l.personal.car.name} v={car.name} />
        <KV k={$l.personal.car.contractor} v={car.contractor} />
        <KV k={$l.personal.car.contractNumber} v={car.contractNumber} />
        <KV k={$l.personal.car.bonusLevel} v={car.bonusLevel} />
        <KV k={$l.personal.car.mainDue} v={car.mainDue} />
        <KV k={$l.personal.car.make} v={car.make} />
        <KV k={$l.personal.car.power} v={car.power} />
        <KV k={$l.personal.car.driveType} v={car.driveType} />
        <KV k={$l.personal.car.licensePlate} v={car.licensePlate} />
        <KV k={$l.personal.car.constructionYear} v={car.constructionYear} />
        <KV k={$l.personal.car.insuranceType} v={car.insuranceType} />
        <KV k={$l.personal.car.originalPrice} v={car.originalPrice} />
        <KV k={$l.personal.car.deductible} v={car.deductible} />
        <KV k={$l.personal.car.bonus} v={car.bonus} />
        <KV k={$l.personal.car.paymentType} v={car.paymentType} />
      </div>
    </section>
    {/each}
  {/if}

  <section>
    <h2>{$l.needsAssessment.subtitles.experiences}</h2>
    <div class="experiences-container">
    {#each d.experiences as exp}
      <div class="exp-name">{exp.name}</div>
      <div class="exp-has">
        {#if exp.hasExperience}
          {$l.needsAssessment.experiences.yesExperience}
          {:else}
          {$l.needsAssessment.experiences.noExperience}
        {/if}
      </div>
      <div class="exp-since">
        {#if exp.hasExperience}
        {exp.since}
        {/if}
      </div>
      <div class="exp-level">
        {#if exp.hasExperience}
        {exp.level}
        {/if}
      </div>
    {/each}
    </div>
  </section>

  <section>
    <h2>{$l.needsAssessment.signing.powerOfAttornyTitle}</h2>
    <p>{@html format($l.needsAssessment.signing.powerOfAttornyText, identification)}</p>
    <div class="placetime">{d.powerOfAttorny.place}, {d.powerOfAttorny.date}</div>
    <img class="signature" src={d.powerOfAttorny.signature} alt="signature"/>
  </section>

  <section>
    <h2>{$l.needsAssessment.signing.noticeTitle}</h2>
    <p>{@html $l.needsAssessment.signing.noticeText}</p>
    <div class="placetime">{d.legalNotice.place}, {d.legalNotice.date}</div>
    <img class="signature" src={d.legalNotice.signature} alt="signature"/>
  </section>
</div>


</div>

<style lang="scss">

</style>
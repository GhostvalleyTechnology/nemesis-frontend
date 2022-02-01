<script lang="ts">
  import l from '../../localisation';
  import KV from './PrintKeyValue.svelte';
  import KC from './PrintKeyCheckbox.svelte';
  import { NeedsAssessmentType } from "./NeedsAssessmentType";
  import { Gender, MaritalStatus } from '../../gen';
  import { mapCountryToName } from '../../country';
  import { mapCodeToSocialInsuranceInstitutionName } from '../../socialinsuranceinstitution';

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
      margin-top: 20mm;
      margin-bottom: 20mm;
      width: 170mm;
      height: 257mm;
    }
    .kv-container {
      display: grid;
      grid-template-columns: auto 1fr;
      padding: 5mm 5mm 0mm 5mm;
      row-gap: 2mm;
    }
    .value {
      padding-left: 15mm;
    }
    section {
      padding-top: 20mm;
      break-inside: avoid;
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
</script>
<div style="display: none;">
<div bind:this={page}>
  <h1>{$l.needsAssessment.title}</h1>
  <section>
  <h2>{$l.needsAssessment.subtitles.personal}</h2>
  <div class="personal kv-container">
    <KV k={$l.personal.title} v={d.client.title}/>
    <KV k={$l.personal.firstName} bind:v={d.client.firstName}/>
    <KV k={$l.personal.lastName} v={d.client.lastName}/>
    <KV k={$l.personal.degree} v={d.client.academicDegree}/>
    <KV k={$l.personal.gender.label} v={getGender(d.client.gender)}/>
    <KV k={$l.personal.birthday} v={d.client.birthday}/>
    <KV k={$l.personal.nationality} v={mapCountryToName(d.client.nationality)}/>
    <KV k={$l.personal.birthPlace} v={d.client.birthPlace}/>
    <KV k={$l.personal.occupation} v={d.client.occupation}/>
    <KV k={$l.personal.socialInsuranceInstitution} v={mapCodeToSocialInsuranceInstitutionName(d.client.socialInsuranceInstitution)}/>
    <KV k={$l.personal.address} v={d.client.address}/>
    <KV k={$l.personal.zipCode} v={d.client.zipCode}/>
    <KV k={$l.personal.city} v={d.client.city}/>
    <KV k={$l.personal.country} v={mapCountryToName(d.client.country)}/>
    <KV k={$l.personal.phone} v={d.client.phone}/>
    <KV k={$l.personal.mobile} v={d.client.mobile}/>
    <KV k={$l.personal.email} v={d.client.email}/>
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

  <h2>{$l.needsAssessment.subtitles.insurance}</h2>

</div> 
</div>

<style lang="scss">

</style>
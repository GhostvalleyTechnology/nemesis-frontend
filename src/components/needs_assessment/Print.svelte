<script lang="ts">
  import l from '../../localisation';
  import Button, { Label } from '@smui/button';
  import KV from './PrintKeyValue.svelte';
  import KC from './PrintKeyCheckbox.svelte';
  import { NeedsAssessmentType } from "./NeedsAssessmentType";
  import { Gender } from '../../gen';
  import { mapCountryToName } from '../../country';
  import { mapCodeToSocialInsuranceInstitutionName } from '../../socialinsuranceinstitution';

  export let d: NeedsAssessmentType;
  let page: HTMLDivElement;
  function print()
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
    </style>
  </head>
  <body>${page.innerHTML}</body>
</html>`
    var a = window.open('', '', 'height=500, width=500');
    a.document.write(template);
    a.document.close();
    a.print();
    a.close();
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
</script>

<div bind:this={page}>
  <h1>{$l.needsAssessment.title}</h1>
  <h2>{$l.needsAssessment.subtitles.personal}</h2>
  <div>
    <KV k={$l.personal.firstName} v={d.client.firstName}/>
    <KV k={$l.personal.lastName} v={d.client.lastName}/>
    <KV k={$l.personal.email} v={d.client.email}/>
    <KV k={$l.personal.gender.label} v={getGender(d.client.gender)}/>
    <KV k={$l.personal.birthday} v={d.client.birthday}/>
    <KV k={$l.personal.nationality} v={mapCountryToName(d.client.nationality)}/>
    <KV k={$l.personal.birthPlace} v={d.client.birthPlace}/>
    <KV k={$l.personal.occupation} v={d.client.occupation}/>
    <KV k={$l.personal.socialInsuranceInstitution} v={mapCodeToSocialInsuranceInstitutionName(d.client.socialInsuranceInstitution)}/>
    <KV k={$l.personal.title} v={d.client.title}/>
    <KV k={$l.personal.degree} v={d.client.academicDegree}/>
    <KC k={$l.personal.militaryServiceDone} v={d.client.militaryServiceDone}/>
    <KC k={$l.personal.smoker} v={d.client.smoker}/>
    <KC k={$l.personal.pets} v={d.client.pets}/>
    <KV k={$l.personal.petsRemarks} check={d.client.pets} v={d.client.petsRemarks}/>
  </div>
</div>

<Button on:click={() => print()} variant="raised" style="margin-top: 50px">
  <Label>{$l.needsAssessment.finishButton}</Label>
</Button>

<style lang="scss">

</style>
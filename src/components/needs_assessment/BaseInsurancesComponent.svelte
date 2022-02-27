<script lang="ts">
    import l from '../../localisation';
    import PieChart from "../PieChart.svelte";
    import BaseInsuranceComponent from './BaseInsuranceComponent.svelte';
    import { NeedsAssessmentType } from './NeedsAssessmentType';
    import HomeInsurance from './HomeInsurance.svelte';
import Divider from '../Divider.svelte';
  
    export let assessment: NeedsAssessmentType;
  
    let percent = 0;
    $: percent = 
      (assessment.insurances.accidentInsurance.clientHas ? 30 : 0) + 
      (assessment.insurances.disabilityInsurance.clientHas ? 30 : 0) + 
      (assessment.insurances.homeInsurance.clientHas ? 30 : 0) + 
      (assessment.insurances.legalProtectionInsurance.clientHas ? 10 : 0);
  
  </script>
  
  <div class="insurance-container">
    <div class="insurance-pie">
        <PieChart size={300} {percent} title={$l.needsAssessment.insurances.chartTitle} titleClass="mdc-typography--headline5" containerStyle="position: sticky; top: 5px;"/>
    </div>
    <BaseInsuranceComponent 
      bind:insurance={assessment.insurances.accidentInsurance} 
      label={$l.needsAssessment.insurances.accidentInsurance.name} 
      helpSubtitle={$l.needsAssessment.insurances.accidentInsurance.helpSubtitle} 
      helpText={$l.needsAssessment.insurances.accidentInsurance.helpText} />

      <Divider margin="20px 0"/>
  
    <BaseInsuranceComponent 
      bind:insurance={assessment.insurances.disabilityInsurance} 
      label={$l.needsAssessment.insurances.disabilityInsurance.name} 
      helpSubtitle={$l.needsAssessment.insurances.disabilityInsurance.helpSubtitle} 
      helpText={$l.needsAssessment.insurances.disabilityInsurance.helpText} />
  
    <BaseInsuranceComponent 
      bind:insurance={assessment.insurances.homeInsurance} 
      label={$l.needsAssessment.insurances.homeInsurance.name} 
      helpSubtitle={$l.needsAssessment.insurances.homeInsurance.helpSubtitle} 
      helpText={$l.needsAssessment.insurances.homeInsurance.helpText}>
        <HomeInsurance slot="additionalInput" bind:insurance={assessment.insurances.homeInsurance}/>
    </BaseInsuranceComponent>
  
    <BaseInsuranceComponent 
      bind:insurance={assessment.insurances.legalProtectionInsurance} 
      label={$l.needsAssessment.insurances.legalProtectionInsurance.name} 
      helpSubtitle={$l.needsAssessment.insurances.legalProtectionInsurance.helpSubtitle} 
      helpText={$l.needsAssessment.insurances.legalProtectionInsurance.helpText} />
  </div>
  
  <style lang="scss">
    .insurance-container {
        display: grid;
        grid-template-columns: 1fr auto;
        row-gap: 20px;
        column-gap: 80px;
        grid-template-areas: 
            "r1 pie"
            "r2 pie"
            "r3 pie"
            "r4 pie";
    }
    .insurance-pie {
        grid-area: pie;
    }
  </style>
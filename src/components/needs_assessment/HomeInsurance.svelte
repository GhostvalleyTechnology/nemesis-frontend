<script lang="ts">
  import l from '../../localisation';
  import StylizedCheckbox from "../StylizedCheckbox.svelte";
  import Textfield from '@smui/textfield';
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';
  import { HomeInsuranceType } from "./NeedsAssessmentType";

  export let insurance: HomeInsuranceType;
</script>

<div class="item">
<StylizedCheckbox bind:value={insurance.homeOwnership} label={$l.needsAssessment.insurances.homeInsurance.homeOwnershipLabel}>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={insurance.home.builtArea} label={$l.personal.home.builtArea}/>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={insurance.home.floors} label={$l.personal.home.floors}/>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={insurance.home.roofType} label={$l.personal.home.roofType}/>
  <FormField>
    <Checkbox bind:checked={insurance.home.cellar} touch />
    <span slot="label">{$l.personal.home.cellar}</span>
  </FormField>
  <FormField>
    <Checkbox bind:checked={insurance.home.pool} touch />
    <span slot="label">{$l.personal.home.pool}</span>
  </FormField>
  <StylizedCheckbox bind:value={insurance.home.photovoltaic} label={$l.personal.home.photovoltaic}>
    <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={insurance.home.photovoltaicRemarks} label={$l.personal.home.photovoltaicRemarks}/>
  </StylizedCheckbox>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={insurance.home.specialAssets} label={$l.personal.home.specialAssets}/>
</StylizedCheckbox>
</div>
<div class="item">
<StylizedCheckbox bind:value={insurance.householdInsurance} label={$l.needsAssessment.insurances.homeInsurance.householdInsuranceLabel}>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={insurance.householdArea} label={$l.personal.home.area}/>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={insurance.petsRemarks} label={$l.personal.pets}/>
</StylizedCheckbox>
</div>
<div class="item">
<StylizedCheckbox bind:value={insurance.liabilityInsurance} label={$l.needsAssessment.insurances.homeInsurance.liabilityInsuranceLabel}>

</StylizedCheckbox>
</div>
<style lang="scss">
  .item {
    padding-top: 50px;
  }
</style>
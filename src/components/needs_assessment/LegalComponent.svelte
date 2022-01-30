<script lang="ts">
  import l, { format } from '../../localisation';
  import Textfield from '@smui/textfield';
  import Sign from '../Sign.svelte';
  import { NeedsAssessmentType } from './NeedsAssessmentType';
  export let assessment: NeedsAssessmentType;
  $: identification = assessment.client.firstName + ' ' + assessment.client.lastName;
</script>

<h3>{$l.needsAssessment.signing.powerOfAttornyTitle}</h3>
<p>{@html format($l.needsAssessment.signing.powerOfAttornyText, identification)}</p>
<div class='group'>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={assessment.powerOfAttorny.date} label={$l.needsAssessment.signing.date} type="date"/>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={assessment.powerOfAttorny.place} label={$l.needsAssessment.signing.place}/>
</div>
<Sign bind:signature={assessment.powerOfAttorny.signature}/>
<h3>{$l.needsAssessment.signing.noticeTitle}</h3>
<p>{@html $l.needsAssessment.signing.noticeText}</p>
<div class='group'>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={assessment.legalNotice.date} label={$l.needsAssessment.signing.date} type="date"/>
  <Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={assessment.legalNotice.place} label={$l.needsAssessment.signing.place}/>
</div>
<Sign bind:signature={assessment.legalNotice.signature}/>

<style lang="scss">
  .group {
    display: flex;
    gap: 20px;
  }
</style>
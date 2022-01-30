<script lang="ts">
  import l, { format } from '../../localisation';
  import Textfield from '@smui/textfield';
  import Sign from '../Sign.svelte';
  import { NeedsAssessmentType } from './NeedsAssessmentType';
  export let assessment: NeedsAssessmentType;
  $: identification = assessment.client.firstName + ' ' + assessment.client.lastName;
</script>

<h2>{$l.needsAssessment.signing.powerOfAttornyTitle}</h2>
<p>{@html format($l.needsAssessment.signing.powerOfAttornyText, identification)}</p>
<Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={assessment.powerOfAttorny.date} label={$l.needsAssessment.signing.date} type="date"/>
<Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={assessment.powerOfAttorny.place} label={$l.needsAssessment.signing.place}/>
<Sign bind:signature={assessment.powerOfAttorny.signature}/>
<h2>{$l.needsAssessment.signing.noticeTitle}</h2>
<p>{@html $l.needsAssessment.signing.noticeText}</p>
<Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={assessment.legalNotice.date} label={$l.needsAssessment.signing.date} type="date"/>
<Textfield input$emptyValueUndefined={true} input$emptyValueNull={true} style="width: 100%;" bind:value={assessment.legalNotice.place} label={$l.needsAssessment.signing.place}/>
<Sign bind:signature={assessment.legalNotice.signature}/>
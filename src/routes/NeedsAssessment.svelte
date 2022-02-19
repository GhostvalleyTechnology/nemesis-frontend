<script lang="ts">
    import l from '../localisation'
    import Button, { Label } from '@smui/button';
    import PersonalComponent from '../components/client/PersonalComponent.svelte';
    import BaseInsurancesComponent from '../components/needs_assessment/BaseInsurancesComponent.svelte';
    import ExperienceComponent from '../components/needs_assessment/ExperienceComponent.svelte';
    import ProvisionsComponent from '../components/needs_assessment/ProvisionsComponent.svelte';
    import OpenCloseToggle from '../components/OpenCloseToggle.svelte';
    import { createNeedsAssessment } from '../components/needs_assessment/NeedsAssessmentType';
    import LegalComponent from '../components/needs_assessment/LegalComponent.svelte';
    import Print from '../components/needs_assessment/Print.svelte';

    let assessment = createNeedsAssessment();
    let print: Print;

</script>
<div class="form-container">
        <h1 class="mdc-typography--headline2">{$l.needsAssessment.title}</h1>
        <OpenCloseToggle label={$l.needsAssessment.subtitles.personal} labelStyle="mdc-typography--headline4">
            <PersonalComponent bind:client={assessment.client} edit={true}/>
        </OpenCloseToggle>

        <OpenCloseToggle label={$l.needsAssessment.subtitles.insurance} labelStyle="mdc-typography--headline4">
            <BaseInsurancesComponent bind:assessment={assessment} />
        </OpenCloseToggle>

        <OpenCloseToggle label={$l.needsAssessment.subtitles.provision} labelStyle="mdc-typography--headline4">
            <ProvisionsComponent bind:assessment={assessment} />
        </OpenCloseToggle>

        <OpenCloseToggle label={$l.needsAssessment.subtitles.experiences} labelStyle="mdc-typography--headline4">
            {#each assessment.experiences as experience}
                <ExperienceComponent {experience}/>
            {/each}
        </OpenCloseToggle>
        <OpenCloseToggle label={$l.needsAssessment.subtitles.legal} labelStyle="mdc-typography--headline4">
            <LegalComponent bind:assessment={assessment}/>
        </OpenCloseToggle>

        <Button on:click={() => print.print()} variant="raised" style="margin-top: 50px">
            <Label>{$l.needsAssessment.finishButton}</Label>
        </Button>

        <Print bind:this={print} bind:d={assessment}/>

</div>

<style lang="scss">
    .form-container {
        max-width: 1000px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
</style>
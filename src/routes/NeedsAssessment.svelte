<script lang="ts">
    import l from '../localisation'
    import PersonalComponent from '../components/client/PersonalComponent.svelte';
    import BaseInsurancesComponent from '../components/needs_assessment/BaseInsurancesComponent.svelte';
    import ExperienceComponent from '../components/needs_assessment/ExperienceComponent.svelte';
    import ProvisionsComponent from '../components/needs_assessment/ProvisionsComponent.svelte';
    import OpenCloseToggle from '../components/OpenCloseToggle.svelte';
    import newNeedsAssessment from '../components/needs_assessment/NeedsAssessmentType';
import LegalComponent from '../components/needs_assessment/LegalComponent.svelte';

    let assessment = newNeedsAssessment;
    
</script>
<div class="form-container">
    
    <h1>{$l.needsAssessment.title}</h1>
    <OpenCloseToggle label={$l.needsAssessment.subtitles.personal} labelStyle="mdc-typography--headline3">
        <PersonalComponent bind:client={assessment.client}/>
    </OpenCloseToggle>

    <OpenCloseToggle label={$l.needsAssessment.subtitles.insurance} labelStyle="mdc-typography--headline3">
        <BaseInsurancesComponent bind:client={assessment.client} />
    </OpenCloseToggle>

    <OpenCloseToggle label={$l.needsAssessment.subtitles.provision} labelStyle="mdc-typography--headline3">
        <ProvisionsComponent bind:client={assessment.client} />
    </OpenCloseToggle>

    <OpenCloseToggle label={$l.needsAssessment.subtitles.experiences} labelStyle="mdc-typography--headline3">
        {#each assessment.experiences as experience}
            <ExperienceComponent {experience}/>
        {/each}
    </OpenCloseToggle>
    <OpenCloseToggle label={$l.needsAssessment.subtitles.legal} labelStyle="mdc-typography--headline3">
        <LegalComponent bind:assessment={assessment}/>
    </OpenCloseToggle>
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
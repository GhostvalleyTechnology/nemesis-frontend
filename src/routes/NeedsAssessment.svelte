<script lang="ts">
    import l from '../localisation'
    import { snackbar } from "../stores";
    import Button, { Label } from '@smui/button';
    import PersonalComponent from '../components/client/PersonalComponent.svelte';
    import BaseInsurancesComponent from '../components/needs_assessment/BaseInsurancesComponent.svelte';
    import ProvisionsComponent from '../components/needs_assessment/ProvisionsComponent.svelte';
    import OpenCloseToggle from '../components/OpenCloseToggle.svelte';
    import { createNeedsAssessment } from '../components/needs_assessment/NeedsAssessmentType';
    import LegalComponent from '../components/needs_assessment/LegalComponent.svelte';
    import Print from '../components/needs_assessment/Print.svelte';
    import WealthBuilding from '../components/needs_assessment/WealthBuilding.svelte';
    import StylizedCheckbox from '../components/StylizedCheckbox.svelte';
    import { ClientService } from '../gen';

    let assessment = createNeedsAssessment();
    let print: Print;
    let saveNewClient = false;
    const finish = () => {
        if(saveNewClient) {
            ClientService.add(assessment.client).then(_ => snackbar.set("Kunde angelegt"));
        }
        print.print();
    }
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
        
        <OpenCloseToggle label={$l.needsAssessment.provisions.wealthBuilding} labelStyle="mdc-typography--headline4">
            <WealthBuilding bind:assessment={assessment}/>
        </OpenCloseToggle>
        <OpenCloseToggle label={$l.needsAssessment.subtitles.legal} labelStyle="mdc-typography--headline4">
            <LegalComponent bind:assessment={assessment}/>
        </OpenCloseToggle>


        <StylizedCheckbox label={$l.needsAssessment.saveClient} bind:value={saveNewClient}/>

        <Button on:click={finish} variant="raised">
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
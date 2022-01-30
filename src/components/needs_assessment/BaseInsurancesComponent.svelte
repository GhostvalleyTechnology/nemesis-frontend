<script lang="ts">
    import l from '../../localisation';
    import { Client } from "../../gen";
    import PieChart from "../PieChart.svelte";
    import BaseInsuranceComponent from './BaseInsuranceComponent.svelte';

    export let client: Client;
    let accidentInsurance = false;
    let disabilityInsurance = false;
    let homeInsurance = false;
    let legalProtectionInsurance = false;

    let percent = 0;
    $: percent = (accidentInsurance ? 30 : 0) + (disabilityInsurance ? 30 : 0) + (homeInsurance ? 30 : 0) + (legalProtectionInsurance ? 10 : 0);

</script>

<div class="insurance-container">
    <div class="insurance-pie">
        <PieChart size={300} {percent} title={$l.needsAssessment.insurances.chartTitle} titleClass="mdc-typography--headline5" containerStyle="position: sticky; top: 5px;"/>
    </div>
    <BaseInsuranceComponent bind:client={client} bind:hasInsurance={accidentInsurance} label={$l.needsAssessment.insurances.accidentInsurance.name} helpSubtitle={$l.needsAssessment.insurances.accidentInsurance.helpSubtitle} helpText={$l.needsAssessment.insurances.accidentInsurance.helpText} />
    <BaseInsuranceComponent bind:client={client} bind:hasInsurance={disabilityInsurance} label={$l.needsAssessment.insurances.disabilityInsurance.name} helpSubtitle={$l.needsAssessment.insurances.disabilityInsurance.helpSubtitle} helpText={$l.needsAssessment.insurances.disabilityInsurance.helpText} />
    <BaseInsuranceComponent bind:client={client} bind:hasInsurance={homeInsurance} label={$l.needsAssessment.insurances.homeInsurance.name} helpSubtitle={$l.needsAssessment.insurances.homeInsurance.helpSubtitle} helpText={$l.needsAssessment.insurances.homeInsurance.helpText} />
    <BaseInsuranceComponent bind:client={client} bind:hasInsurance={legalProtectionInsurance} label={$l.needsAssessment.insurances.legalProtectionInsurance.name} helpSubtitle={$l.needsAssessment.insurances.legalProtectionInsurance.helpSubtitle} helpText={$l.needsAssessment.insurances.legalProtectionInsurance.helpText} />
</div>

<!--

Besteht eine Eigenheim/HHV/HP? -> Ja/Nein. Zusatzfeld HHV mit Quadratmeter/Tiere.

Zusatzfeld Eigenheim: verbaute Fläche Quadratmeter/ Stockwerke/ Dach Art/ Keller/ Pool/Photovoltaikanlage mit Fläche oder Modulzahl. besondere Sachwerte zB Elektro Rasenmäher oder Tresor 

HP, besteht eine Berufshaftpflicht? ja/nein wenn „ja“ dann Gesellschaft und Prämie


-->

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
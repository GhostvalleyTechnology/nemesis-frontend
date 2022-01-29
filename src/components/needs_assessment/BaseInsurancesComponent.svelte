<script lang="ts">
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
    <BaseInsuranceComponent bind:client={client} bind:hasInsurance={accidentInsurance} label="Accident Insurance" helpSubtitle="Max Muster stolpert über die Stiege!" helpText="Beim Sturz Verletzt er sich schwer und beschädigt die Verglasung des Stiegenhauses!" />
    <BaseInsuranceComponent bind:client={client} bind:hasInsurance={disabilityInsurance} label="Disability Insurance" helpSubtitle="Max Muster stolpert über die Stiege!" helpText="Aufgrund der Verletzungen muss Max ins Spital geflogen werden! Nach einiger Zeit stellt sich heraus, das Max aufgrund seiner Verletzungen den seinem Beruf nicht mehr ausüben kann!" />
    <BaseInsuranceComponent bind:client={client} bind:hasInsurance={homeInsurance} label="Home Insurance" helpSubtitle="Max Muster stolpert über die Stiege!" helpText="Als draufgabe bekommt Max noch eine saftige Rechnung des Gebäudebesitzter's, aufgrund der Beschädigten Scheibe!" />
    <BaseInsuranceComponent bind:client={client} bind:hasInsurance={legalProtectionInsurance} label="Legal Protection Insurance" helpSubtitle="Max Muster stolpert über die Stiege!" helpText="Max möchte das nicht auf sich sitzen lassen, und das von einem Rechtsanwalt Prüfen lassen" />

    <div class="insurance-pie">
        <PieChart size={200} {percent} />
    </div>
</div>


<style lang="scss">
    .insurance-container {
        display: grid;
        grid-template-columns: 1fr auto;
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
<script lang="ts">
    import { slide } from 'svelte/transition';
    import { Client, ClientContract } from "../../gen";
    import HelpToggleButton from "../HelpToggleButton.svelte";
    import NeedsAssessmentCard from "../NeedsAssessmentCard.svelte";
    import SelectLegacyContract from "../SelectLegacyContract.svelte";
    import StylizedCheckbox from "../StylizedCheckbox.svelte";

    let helpToggle = false;
    export let hasInsurance = false;
    export let label = "";
    export let helpSubtitle = "";
    export let helpText = "";
    export let client: Client;
    
    if(!client.clientContracts) {
        client.clientContracts = [];
    }
    let contract: ClientContract = {};

    $: if(hasInsurance) {
        if(!client.clientContracts) {
            client.clientContracts = [];
        }
        let contracts = client.clientContracts;
        contracts.push(contract);
        client.clientContracts = contracts;
    } else {
        let contracts = client.clientContracts;
        client.clientContracts = contracts.filter(item => item !== contract);
    }
</script>

<div class="insurance-item">
    <StylizedCheckbox bind:value={hasInsurance} {label}/>
    <HelpToggleButton bind:value={helpToggle}/>
    {#if helpToggle}
    <div transition:slide|local>
        <NeedsAssessmentCard subtitle={helpSubtitle} text={helpText} />
    </div>
    {/if}
    {#if hasInsurance}
    <div transition:slide|local>
        <SelectLegacyContract bind:contract={contract}/>
    </div>
    {/if}
</div>

<style lang="scss">
    .insurance-item {
        display: grid;
        grid-template-columns: 60% 40%;
    }
</style>
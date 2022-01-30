<script lang="ts">
    import { slide } from 'svelte/transition';
    import { Client, ClientContract } from "../../gen";
    import SelectLegacyContract from "../SelectLegacyContract.svelte";
    import StylizedCheckbox from "../StylizedCheckbox.svelte";

    export let hasInsurance = false;
    export let label = "";
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
    {#if hasInsurance}
    <div transition:slide|local>
        <SelectLegacyContract bind:contract={contract}/>
    </div>
    {/if}
</div>

<style lang="scss">
    
</style>
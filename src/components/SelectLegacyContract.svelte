<script lang="ts">
    import { ClientContract } from '../gen'
    import ContractorSelection from './ContractorSelection.svelte';
    import PaymentFrequencyComponent from './PaymentFrequencyComponent.svelte';
    import EuroTextfield from './EuroTextfield.svelte';

    export let contract: ClientContract;
</script>
<div class="container">
    <EuroTextfield bind:integer={contract.paymentValue} style="width: 100%"/>
    <PaymentFrequencyComponent bind:paymentFrequency={contract.paymentFrequency} style="width: 100%"/>
    <ContractorSelection bind:partner={contract.contractor} style="width: 100%"/>
</div>

<style lang="scss">
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
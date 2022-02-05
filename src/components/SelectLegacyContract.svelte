<script lang="ts">
    import { ClientContractDto } from '../gen'
    import ContractorSelection from './ContractorSelection.svelte';
    import PaymentFrequencyComponent from './PaymentFrequencySelection.svelte';
    import EuroTextfield from './EuroTextfield.svelte';

    export let contract: ClientContractDto;
</script>
<div class="container">
    <EuroTextfield bind:integer={contract.paymentValue} edit={true}/>
    <PaymentFrequencyComponent bind:paymentFrequency={contract.paymentFrequency}/>
    <ContractorSelection bind:partner={contract.contractor} edit={true}/>
</div>

<style lang="scss">
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>
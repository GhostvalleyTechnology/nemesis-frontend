<script lang="ts">
    import { ClientContract } from '../gen'
    import { Cell } from '@smui/layout-grid';
    import ContractorSelection from './ContractorSelection.svelte';
    import PaymentFrequencyComponent from './PaymentFrequencyComponent.svelte';
    import EuroTextfield from './EuroTextfield.svelte';

    export let contract: ClientContract;
</script>
<Cell span={4}>
    <EuroTextfield bind:integer={contract.paymentValue} />
</Cell>
<Cell span={4}>
    <PaymentFrequencyComponent bind:paymentFrequency={contract.paymentFrequency}/>
</Cell>
<Cell span={4}>
    <ContractorSelection bind:partner={contract.contractor} />
</Cell>
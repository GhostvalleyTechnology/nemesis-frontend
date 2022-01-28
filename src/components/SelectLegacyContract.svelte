<script lang="ts">
    import { ClientContract } from '../gen'
    import { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield';
    import ContractorSelection from './ContractorSelection.svelte';
    import PaymentFrequencyComponent from './PaymentFrequencyComponent.svelte';

    export let contract: ClientContract;

</script>
<Cell span={4}>
    <Textfield bind:value={contract.paymentValue} label="Number" type="number" />
</Cell>
<Cell span={4}>
    <PaymentFrequencyComponent bind:paymentFrequency={contract.paymentFrequency}/>
</Cell>
<Cell span={4}>
    <ContractorSelection bind:partner={contract.contractor} />
</Cell>
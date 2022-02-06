<script lang="ts">
  import l from '../../localisation';
  import KV from './PrintKeyValue.svelte';
  import KC from './PrintKeyCheckbox.svelte';
  import { getFrequency, getEuro } from './PrintFunctions';
  import { ClientContractDto } from '../../gen';
  import { InsuranceType } from './NeedsAssessmentType';

  export let label: string;
  export let insurance: InsuranceType & ClientContractDto;
</script>

  <KC k={label} kc='key payment-header' v={insurance.clientHas}/>
  {#if insurance.clientHas}
    <KV k={$l.payment.contractor} kc='payment-key key' v={insurance.contractor.name}/>
    <KV k={$l.payment.paymentFrequency} kc='payment-key key' v={getFrequency(insurance.paymentFrequency)}/>
    <KV k={$l.payment.euroTextfieldLabel} kc='payment-key key' v={getEuro(insurance.paymentValue)}/>
    <slot />
  {/if}